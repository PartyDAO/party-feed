import { config } from "./config";
import { ethers } from "ethers";
export const ethersProvider = new ethers.providers.InfuraProvider(
  config.isTestnet ? 4 : 1,
  config.infuraId
);

export const ratsContract = Rats__factory.connect(
  config.contractAddress,
  ethersProvider
);
