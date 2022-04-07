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
  etherscan: {
    apiBase: "https://api.etherscan.io/api",
    apiKey: stringFromENVorThrow(
      process.env.ETHERSCAN_API_KEY,
      "twitter api key"
    ),
  },
  infuraId: stringFromENVorThrow(process.env.INFURA_ID, "infura id"),
  hasuraUrl: stringFromENVorThrow(process.env.HASURA_URL, "hasura url"),
  redisUri: stringFromENVorThrow(process.env.REDIS_URI, "redis uri"),
  twitter: {
    apiKey: stringFromENVorThrow(
      process.env.TWITTER_API_KEY,
      "twitter api key"
    ),
    apiSecret: stringFromENVorThrow(
      process.env.TWITTER_API_SECRET,
      "twitter api secret"
    ),
    accessToken: stringFromENVorThrow(
      process.env.TWITTER_ACCESS_TOKEN,
      "twitter access token"
    ),
    accessSecret: stringFromENVorThrow(
      process.env.TWITTER_ACCESS_SECRET,
      "twitter access secret"
    ),
  },
  nodeEnv: stringFromENVorThrow(
    process.env.NODE_ENV || "development",
    "node environment"
  ),
  openSeaApiKey: stringFromENVorThrow(
    process.env.OPENSEA_API_KEY,
    "opensea api key"
  ),
  partybidApiBase: stringFromENVorThrow(
    process.env.PARTYBID_API_BASE || "https://www.partybid.app/api",
    "partybid api base"
  ),
};
