import axios from "axios";
import { OpenSeaCollection } from "opensea-js/lib/types";
import { TwitterApi } from "twitter-api-v2";
import { config } from "./config";
import { openSeaPort } from "./opensea";
import { PartyEvent } from "./types";
import {
  bestUserName,
  getShouldAlertAboutNewParty,
  getShouldAlertAboutPartyHalfWay,
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
  // collection buys do not have an associated nftTokenId. in this case, we default to tokenId 1
  const tokenId = nftTokenId ? nftTokenId : 1;
  try {
    const r = await axios.get(
      `https://api.opensea.io/api/v1/asset/${nftContractAddress}/${tokenId}`,
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

  // NOTE: It is against Twitter's terms to @ mention an account that has not @ mentioned
  //   the twitter bot's account. commenting out this logic for now.
  // twitter_username is returned by the API, but is not on the OpenSeaCollection type
  // @ts-ignore
  // const twitterUsername = collection.twitter_username;
  // return twitterUsername
  //   ? // add "@" to the collection twitter username so that twitter will hyperlink
  //     // to that collection's twitter account
  //     `@${twitterUsername}`
  //   : collection.name;

  return collection.name;
};

const getTwitterHandleOrNameFromEvent = async (
  event: PartyEvent
): Promise<string> => {
  if (
    event.eventType === "contribution" ||
    event.eventType === "finalization"
  ) {
    const collection = await getOpenseaCollection(event);
    const twitterHandleOrName = getTwitterHandleOrNameFromCollection(
      collection
    );
    return twitterHandleOrName;
  } else {
    return "";
  }
};

const getEventText = async (event: PartyEvent): Promise<string | undefined> => {
  const partyDesc = `${event.party.name} (${event.party.symbol})`;
  const creatorName = await bestUserName(event.party.createdBy);
  const twitterHandleOrName = await getTwitterHandleOrNameFromEvent(event);
  const twitterHandleOrNameStr = twitterHandleOrName
    ? ` on ${twitterHandleOrName}`
    : "";

  switch (event.eventType) {
    case "contribution":
      const shouldAlertAboutNewParty = await getShouldAlertAboutNewParty(event);
      if (shouldAlertAboutNewParty) {
        return (
          `What's this? The party created by ${creatorName} just got its first contribution…` +
          "\n\n" +
          `${partyDesc}${twitterHandleOrNameStr}`
        );
      }

      const shouldAlertAboutPartyHalfWay = await getShouldAlertAboutPartyHalfWay(
        event
      );
      if (shouldAlertAboutPartyHalfWay) {
        return `$Oh wow…{partyDesc}${twitterHandleOrNameStr} is halfway to winning…`;
      }

      return undefined;
    case "finalization":
      if (event.finalization.won) {
        return `What?!! ${partyDesc}${twitterHandleOrNameStr} has won!`;
      } else {
        return undefined;
      }
    case "bid":
    case "start":
      // no tweet text defined for these events
      return undefined;
    default:
      console.error("twitter.ts::Unknown event", event);
      return undefined;
  }
};

export const postTweetIfRelevant = async (event: PartyEvent) => {
  // do not tweet if the party lost
  if (event.eventType === "finalization" && !event.finalization.won) {
    return;
  }

  const eventText = await getEventText(event);
  // do not tweet if the event is unknown
  if (!eventText) {
    return;
  }

  let tweetText = eventText;
  if (
    event.eventType === "contribution" ||
    event.eventType === "finalization"
  ) {
    if (event.party.partyType === "bid") {
      tweetText += `\nhttps://partybid.app/party/${event.party.partyAddress}`;
    } else if (
      event.party.partyType === "buy" ||
      event.party.partyType === "collection"
    ) {
      tweetText += `\nhttps://partybid.app/buy/${event.party.partyAddress}`;
    }
  }

  console.info(`Sending tweet ${tweetText}`);
  return twitterApiPostTweet(tweetText);
};

const twitterApiPostTweet = async (tweetText: string): Promise<any> => {
  if (config.nodeEnv === "development") {
    console.log("tweets are logged in development:", tweetText, "\n");
    return;
  }

  const client = new TwitterApi({
    appKey: config.twitter.apiKey,
    appSecret: config.twitter.apiSecret,
    accessToken: config.twitter.accessToken,
    accessSecret: config.twitter.accessSecret,
  });

  const tweetRes = await client.v1.tweet(tweetText);
  const tweetUrl = `https://twitter.com/partybidbot/status/${tweetRes.id_str}`;

  console.log("success:", tweetUrl);

  return tweetRes;
};
