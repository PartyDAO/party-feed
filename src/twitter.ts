import axios from "axios";
import { config } from "./config";
import { openSeaPort } from "./opensea";
import { PartyEvent } from "./types";
import { bestUserName } from "./utils";

// todo: look into twitter embed api
type DiscordEmbed = {
  image: { url: string };
}[];

const contributionEmoji = (amountString: string) => {
  const amt = parseFloat(amountString);
  if (amt <= 0.99) {
    return "💰";
  } else if (amt <= 5) {
    return "💰💰";
  } else {
    return "🐳 🐳 🐳";
  }
};

const swapText = async (event: PartyEvent): Promise<string> => {
  const partyDesc = `${event.party.name} (${event.party.symbol})`;
  switch (event.eventType) {
    case "bid":
      return `🗳️ Bid placed for ${event.bid.amountInEth} ETH by ${partyDesc}`;
    case "start":
      const creatorName = await bestUserName(event.party.createdBy);
      return `🥳 New PartyBid **${partyDesc}** created by ${creatorName}`;
    case "contribution":
      const userName = await bestUserName(
        event.contribution.contributorAddress
      );
      return `${contributionEmoji(event.contribution.amountInEth)} ${
        event.contribution.amountInEth
      } ETH contributed to ${partyDesc} by ${userName}`;
    case "finalization":
      if (event.finalization.won) {
        return `🙂 🙂 🙂 ${partyDesc} won and finalized. ${event.finalization.totalSpentInEth} ETH spent. `;
      } else {
        return `😭 ${partyDesc} lost and finalized.`;
      }
  }
  return "Unknown event";
};

const getImageUrl = async (event: PartyEvent): Promise<string | undefined> => {
  if (
    event.eventType === "bid" ||
    event.eventType === "start" ||
    event.eventType === "finalization"
  ) {
    try {
      const r = await openSeaPort.api.getAsset({
        tokenAddress: event.party.nftContractAddress,
        tokenId: event.party.nftTokenId,
      });
      if (r) {
        return r.imageUrlOriginal;
      } else {
        return undefined;
      }
    } catch (e) {
      console.error(e);
      return undefined;
    }
  } else {
    return undefined;
  }
};

export const postTweet = async (event: PartyEvent) => {
  let tweetText = "";
  tweetText += await swapText(event);
  if (
    event.eventType === "start" ||
    event.eventType === "finalization" ||
    event.eventType === "bid"
  ) {
    if (event.party.partyType === "bid") {
      tweetText += ` https://partybid.app/party/${event.party.partyAddress}`;
    } else if (event.party.partyType === "buy") {
      tweetText += ` https://partybid.app/buy/${event.party.partyAddress}`;
    }
  }
  const imageUrl = await getImageUrl(event);
  const embeds: DiscordEmbed = imageUrl ? [{ image: { url: imageUrl } }] : [];

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
