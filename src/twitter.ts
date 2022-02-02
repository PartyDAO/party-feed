import axios from "axios";
import { config } from "./config";
import { PartyEvent, PartyInfo } from "./types";
import {
  bestUserName,
  getIsNewPartyWithContribution,
  getIsPartyHalfWay,
} from "./utils";

const getMarketplaceText = (party: PartyInfo): string => {
  const twHandles = {
    foundation: "@withfnd",
    opensea: "@opensea",
    zora: "@ourzora",
  };

  const marketplaceHandle = twHandles.opensea;

  return marketplaceHandle ? `on ${marketplaceHandle}` : "";
};

const swapText = async (event: PartyEvent): Promise<string> => {
  const partyDesc = `${event.party.name} (${event.party.symbol})`;
  const marketplaceText = getMarketplaceText(event.party);
  switch (event.eventType) {
    // case "bid":
    //   return `${event.bid.amountInEth} ETH bid by ${partyDesc} on [itemName] ${marketplaceText}`;
    case "start":
      const creatorName = await bestUserName(event.party.createdBy);
      if (event.party.partyType === "bid") {
        return `New Party! ${partyDesc} is partying on [itemName] with [#] ETH reserve ${marketplaceText}created by ${creatorName}`;
      } else if (event.party.partyType === "buy") {
        return `New Party! ${partyDesc} is partying on [itemName] with [#] ETH reserve ${marketplaceText}created by ${creatorName}`;
      } else {
        console.error("Unknown party type", event);
        return "";
      }
    case "contribution":
      const isNewParty = getIsNewPartyWithContribution(event.party);
      if (isNewParty) {
        return `New party created by ${creatorName} has its first contribution…`;
      }

      const isPartyHalfWay = getIsPartyHalfWay(event.party);
      if (isPartyHalfWay) {
        return `${partyDesc} on [tags collection] is half way to winning…`;
      }

      return "";
    case "finalization":
      if (event.finalization.won) {
        return `${partyDesc} on [tags collection] has won!`;
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
