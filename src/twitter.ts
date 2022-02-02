import axios from "axios";
import { openSeaPort } from "./opensea";
import { config } from "./config";
import { PartyEvent, PartyInfo } from "./types";
import {
  bestUserName,
  getIsNewPartyWithContribution,
  getIsPartyHalfWay,
} from "./utils";
import { OpenSeaCollection } from "opensea-js/lib/types";

const getMarketplaceText = (party: PartyInfo): string => {
  const twHandles = {
    foundation: "@withfnd",
    opensea: "@opensea",
    zora: "@ourzora",
  };

  const marketplaceHandle = twHandles.opensea;

  return marketplaceHandle ? `on ${marketplaceHandle}` : "";
};

/**
 * queries opensea api for the nft's opensea colleciton
 * @param {PartyEvent} event
 * @returns {Promise<OpenSeaCollection>}
 */
const getOpenseaCollection = async (
  event: PartyEvent
): Promise<OpenSeaCollection> => {
  try {
    const r = await openSeaPort.api.getAsset({
      tokenAddress: event.party.nftContractAddress,
      tokenId: event.party.nftTokenId,
    });
    if (r) {
      return r.collection;
    } else {
      return undefined;
    }
  } catch (e) {
    console.error(e);
    return undefined;
  }
};

/**
 * extracts the twitter username from the opensea collection if available. otherwise
 *   extracts the opensea collection name
 * @param {OpenSeaCollection} collection - opensea collection
 * @returns {string} - twitter username or collection name
 */
const getTwitterHandleOrNameFromCollection = (
  collection: OpenSeaCollection
): string => {
  if (!collection) {
    return "";
  }

  // twitter_username is returned by the API, but is not on the OpenSeaCollection type
  // @ts-ignore
  const twitterUsername = collection.twitter_username;
  return twitterUsername
    ? // add "@" to the collection twitter username so that twitter will hyperlink
      // to that collection's twitter account
      `@${twitterUsername}`
    : collection.name;
};

const getTwitterHandleOrNameFromEvent = async (
  event: PartyEvent
): Promise<string> => {
  if (
    event.eventType === "contribution" ||
    event.eventType === "finalization"
  ) {
    const collection = await getOpenseaCollection(event);
    const twitterHandleOrName =
      getTwitterHandleOrNameFromCollection(collection);
    return twitterHandleOrName;
  } else {
    return "";
  }
};

const swapText = async (event: PartyEvent): Promise<string> => {
  const partyDesc = `${event.party.name} (${event.party.symbol})`;
  const creatorName = await bestUserName(event.party.createdBy);
  const twitterHandleOrName = await getTwitterHandleOrNameFromEvent(event);
  // const marketplaceText = getMarketplaceText(event.party);

  switch (event.eventType) {
    case "contribution":
      const isNewParty = getIsNewPartyWithContribution(event.party);
      if (isNewParty) {
        return `New party created by ${creatorName} has its first contribution…`;
      }

      const isPartyHalfWay = getIsPartyHalfWay(event.party);
      if (isPartyHalfWay) {
        return `${partyDesc} on ${twitterHandleOrName} is half way to winning…`;
      }

      return "";
    case "finalization":
      if (event.finalization.won) {
        return `${partyDesc} on ${twitterHandleOrName} has won!`;
      } else {
        return "";
      }
    default:
      console.error("Unknown event", event);
      return "";
  }
};

export const postTweet = async (event: PartyEvent) => {
  // do not tweet if the party lost
  if (event.eventType === "finalization" && !event.finalization.won) {
    return;
  }

  let tweetText = "";
  tweetText += await swapText(event);
  // do not tweet if the event is unknown
  if (!tweetText) {
    return;
  }

  if (
    event.eventType === "start" ||
    event.eventType === "finalization" ||
    event.eventType === "bid"
  ) {
    if (event.party.partyType === "bid") {
      tweetText += `\n\nLink: https://partybid.app/party/${event.party.partyAddress}`;
    } else if (event.party.partyType === "buy") {
      tweetText += `\n\nLink: https://partybid.app/buy/${event.party.partyAddress}`;
    }
  }

  console.info(`Sending tweet ${tweetText}`);
  return axios.post(
    "https://api.twitter.com/2/tweets",
    {
      text: tweetText,
    },
    {
      headers: {
        Authorization: `Bearer ${config.twitterAccessToken}`,
        "Content-type": "application/json",
      },
    }
  );
};
