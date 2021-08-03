import { config, etherscanIo } from "./config";
import axios from "axios";
import { TradeItem } from "./types";

const swapText = (params: { giveItem: TradeItem; receiveItem: TradeItem }) => {
  const { giveItem, receiveItem } = params;
  const firstText =
    giveItem.type === "art" ? `${giveItem.asset.name}` : "1 $RATS";
  const secondText =
    receiveItem.type === "art" ? `${receiveItem.asset.name}` : "1 $RATS";
  const swapText = `${firstText} <-> ${secondText}`;
  return swapText;
};

type DiscordEmbed = {
  image: { url: string };
}[];

export const alertDiscord = (params: {
  giveItem: TradeItem;
  receiveItem: TradeItem;
  txnHash: string;
}) => {
  const { giveItem, receiveItem, txnHash } = params;

  let discordText = "";

  discordText += `${swapText(params)}`;
  discordText += `\n\n ${`https://rats.art/receipt/${txnHash}`}`;

  const imageUrls: string[] = [];
  if (giveItem.type === "art") {
    imageUrls.push(giveItem.asset.imageUrlOriginal);
  }
  if (receiveItem.type === "art") {
    imageUrls.push(receiveItem.asset.imageUrlOriginal);
  }

  const embeds: DiscordEmbed = imageUrls.map((url) => {
    return {
      image: {
        url: url,
      },
    };
  });

  return axios.post(config.discordWebhookUrl, {
    content: discordText,
    embeds,
  });
};
