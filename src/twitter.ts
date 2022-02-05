import axios from "axios";
import { OpenSeaCollection } from "opensea-js/lib/types";
import { config } from "./config";
import { openSeaPort } from "./opensea";
import { PartyEvent } from "./types";
import {
  bestUserName,
  getIsNewPartyWithContribution,
  // getIsPartyHalfWay,
} from "./utils";

/**
 * queries opensea api for the nft's opensea colleciton
 * @param {PartyEvent} event
 * @returns {Promise<OpenSeaCollection>}
 */
const getOpenseaCollection = async (
  event: PartyEvent
): Promise<OpenSeaCollection> => {
  const {
    party: { nftContractAddress, nftTokenId },
  } = event;
  try {
    const r = await axios.get(
      `https://api.opensea.io/api/v1/asset/${nftContractAddress}/${nftTokenId}`,
      {
        headers: {
          "X-API-KEY": config.openSeaApiKey,
        },
      }
    );
    if (r) {
      return r.data.collection;
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

  switch (event.eventType) {
    case "contribution":
      const isNewParty = await getIsNewPartyWithContribution(event);
      if (isNewParty) {
        return (
          `New party created by ${creatorName} has its first contribution…` +
          "\n\n" +
          `${partyDesc} on ${twitterHandleOrName}`
        );
      }

      // todo: add support for "party halfway" alert
      // const isPartyHalfWay = await getIsPartyHalfWay(event);
      // if (isPartyHalfWay) {
      //   return `${partyDesc} on ${twitterHandleOrName} is half way to winning…`;
      // }

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
    event.eventType === "contribution" ||
    event.eventType === "finalization"
  ) {
    if (event.party.partyType === "bid") {
      tweetText += `\nhttps://partybid.app/party/${event.party.partyAddress}`;
    } else if (event.party.partyType === "buy") {
      tweetText += `\nhttps://partybid.app/buy/${event.party.partyAddress}`;
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
