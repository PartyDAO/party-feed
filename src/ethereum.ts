import { config } from "./config";
import { ethers } from "ethers";
export const ethersProvider = new ethers.providers.InfuraProvider(
  1,
  config.infuraId
);
