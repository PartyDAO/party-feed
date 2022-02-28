import { getAlertedTxn, setAlertedTxn } from "./storage";
import { PartyEvent } from "./types";
import { openSeaPort } from "./opensea";
import { ethersProvider } from "./ethereum";
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

export const alertDiscord = async (event: PartyEvent) => {
  let discordText = "";
  discordText += await swapText(event);
  if (
    event.eventType === "start" ||
    event.eventType === "finalization" ||
    event.eventType === "bid"
  ) {
    if (event.party.partyType === "bid") {
      discordText += ` https://partybid.app/party/${event.party.partyAddress}`;
    } else if (
      event.party.partyType === "buy" ||
      event.party.partyType === "collection"
    ) {
      discordText += ` https://partybid.app/buy/${event.party.partyAddress}`;
    }
  }
  const imageUrl = await getImageUrl(event);
  const embeds: DiscordEmbed = imageUrl ? [{ image: { url: imageUrl } }] : [];

  const didAlert = await getAlertedTxn("discord", event.txHash);
  if (didAlert) {
    console.info(`Skipping alerting on ${discordText} on discord`);
  } else {
    console.info(`Sending alert ${discordText}`);
    await axios.post(config.discordWebhookUrl, {
      content: discordText,
      embeds,
    });
    await setAlertedTxn("discord", event.txHash);
  }
};
