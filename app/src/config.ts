const MAINNET_FACTORY_ADDRESS_1 = "0xD96Ff9e48f095f5a22Db5bDFFCA080bCC3B98c7f";
const MAINNET_FACTORY_ADDRESS_2 = "0xdb355da657a3795bd6faa9b63915cedbe4fadb00";
const MAINNET_ZORA_WRAPPER = "0x11c07cE1315a3b92C9755F90cDF40B04b88c5731";
const MAINNET_FOUNDATION_MARKET_WRAPPER =
  "0x11c07cE1315a3b92C9755F90cDF40B04b88c5731";

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
  infuraId: stringFromENVorThrow(process.env.INFURA_ID, "infura id"),
  discordWebhookUrl: stringFromENVorThrow(
    process.env.DISCORD_WEBHOOK_URL,
    "discord webhook url"
  ),
  factoryAddress1: MAINNET_FACTORY_ADDRESS_1,
  factoryAddress2: MAINNET_FACTORY_ADDRESS_2,
  factoryV2Address: "0xaba3506ddf718278632b245ad0d86bb81070ba47",
  zoraMarketWrapperAddress: MAINNET_ZORA_WRAPPER,
  foundationMarketWrapperAddress: MAINNET_FOUNDATION_MARKET_WRAPPER,
};
