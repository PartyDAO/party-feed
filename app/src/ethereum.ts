import { PartyBidFactory__factory } from "./contracts/factories/PartyBidFactory__factory";
import { config } from "./config";
import { ethers } from "ethers";
import { PartyBid__factory } from "./contracts/factories/PartyBid__factory";
import { PartyBidFactoryV2__factory } from "./contracts";
export const ethersProvider = new ethers.providers.InfuraProvider(
  1,
  config.infuraId
);

export const partyBidFactory1 = PartyBidFactory__factory.connect(
  config.factoryAddress1,
  ethersProvider
);

export const partyBidFactory2 = PartyBidFactory__factory.connect(
  config.factoryAddress2,
  ethersProvider
);

export const partyBidV2Factory = PartyBidFactoryV2__factory.connect(
  config.factoryV2Address,
  ethersProvider
);

export const getPartyBidInstance = (address: string) => {
  return PartyBid__factory.connect(address, ethersProvider);
};
