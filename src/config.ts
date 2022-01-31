require("dotenv").config({ path: ".env.local" });

const stringFromENVorThrow = (value: string, description: string) => {
  if (value) {
    return value;
  } else {
    throw new Error(`Please specify ${description}`);
  }
};

export const etherscanIo = "etherscan.io";

export const config = {
  discordWebhookUrl: stringFromENVorThrow(
    process.env.DISCORD_WEBHOOK_URL,
    "discord webhook url"
  ),
  infuraId: stringFromENVorThrow(process.env.INFURA_ID, "infura id"),
  hasuraUrl: stringFromENVorThrow(process.env.HASURA_URL, "hasura url"),
  redisUri: stringFromENVorThrow(process.env.REDIS_URI, "redis uri"),
  twitterAccessToken: stringFromENVorThrow(
    process.env.TWITTER_ACCESS_TOKEN,
    "twitter access token"
  ),
};
