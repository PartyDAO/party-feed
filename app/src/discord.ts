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
      return `💰 ${userName} contributed ${event.contribution.amountInEth} ETH to ${partyDesc}`;
  }
  return "Unknown event";
};

const getImageUrl = async (event: PartyEvent): Promise<string | undefined> => {
  if (event.eventType === "bid" || event.eventType === "start") {
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
  const imageUrl = await getImageUrl(event);
  const embeds: DiscordEmbed = imageUrl ? [{ image: { url: imageUrl } }] : [];
  console.info(`Sending alert ${discordText}`);
  return axios.post(config.discordWebhookUrl, {
    content: discordText,
    embeds,
  });
};
