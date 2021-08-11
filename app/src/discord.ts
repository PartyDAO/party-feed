import { openSeaPort } from "./opensea";
import { ethersProvider } from "./ethereum";
import { PartyEvent } from "./party_events";
import { config, etherscanIo } from "./config";
import axios from "axios";

type DiscordEmbed = {
  image: { url: string };
}[];

const bestUserName = async (address: string): Promise<string> => {
  const ens = await ethersProvider.lookupAddress(address);
  if (ens) {
    return ens;
  } else {
    return address;
  }
};

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
  const partyDesc = `${event.party.name} (${event.party.tokenSymbol})`;
  switch (event.eventType) {
    case "bid":
      return `🗳️ Bid placed for ${event.bid.amountInEth} ETH by ${partyDesc}`;
    case "start":
      const creatorName = await bestUserName(event.party.creatorAddress);
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
        tokenAddress: event.party.nftContract,
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

export const alertDiscord = async (event: PartyEvent) => {
  let discordText = "";
  discordText += await swapText(event);
  if (event.eventType === "bid" || event.eventType === "start") {
    discordText += ` https://partybid.app/party/${event.party.partyBidAddress}`;
  }
  const imageUrl = await getImageUrl(event);
  const embeds: DiscordEmbed = imageUrl ? [{ image: { url: imageUrl } }] : [];
  console.info(`Sending alert ${discordText}`);
  return axios.post(config.discordWebhookUrl, {
    content: discordText,
    embeds,
  });
};
