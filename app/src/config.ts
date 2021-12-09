const dotEnvPath = process.env.DOTENV_PATH;
if (!dotEnvPath) {
  throw new Error(
    "No dotenv path required, please specify via DOTENV_PATH env var"
  );
}
require("dotenv").config({ path: dotEnvPath });

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
  hasuraUrl: "TODO",
};
