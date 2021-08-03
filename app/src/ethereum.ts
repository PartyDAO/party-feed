import { PartyBidFactory__factory } from "./contracts/factories/PartyBidFactory__factory";
import { config } from "./config";
import { ethers } from "ethers";
import { PartyBid__factory } from "./contracts/factories/PartyBid__factory";
export const ethersProvider = new ethers.providers.InfuraProvider(
  1,
  config.infuraId
);

export const partyBidFactory = PartyBidFactory__factory.connect(
  config.factoryAddress,
  ethersProvider
);

export const getPartyBidInstance = (address: string) => {
  return PartyBid__factory.connect(address, ethersProvider);
};
