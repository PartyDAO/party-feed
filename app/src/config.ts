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

const chosenNetwork = process.env.NETWORK_CHOICE;
if (chosenNetwork !== "testnet" && chosenNetwork !== "mainnet") {
  throw new Error(`Choose a network`);
}
const isTestnet = chosenNetwork === "testnet";

export const etherscanIo = !isTestnet ? "etherscan.io" : "rinkeby.etherscan.io";

export const config = {
  infuraId: stringFromENVorThrow(process.env.INFURA_ID, "infura id"),
  discordWebhookUrl: stringFromENVorThrow(
    process.env.DISCORD_WEBHOOK_URL,
    "discord webhook url"
  ),
  isTestnet,
  contractAddress: isTestnet ? TESTNET_ADDRESS : MAINNET_ADDRESS,
};
