import { ethersProvider } from "./ethereum";
import { config } from "./config";
import { OpenSeaPort, Network } from "opensea-js";
import { OpenSeaAsset } from "opensea-js/lib/types";
import { providers } from "ethers";
export const openSeaIo = config.isTestnet
  ? "testnets.opensea.io"
  : "opensea.io";

export const openSeaAccountUrl = (address: string) => {
  return `https://${openSeaIo}/accounts/${address}`;
};

export const sanitizeAsset = (asset: OpenSeaAsset): OpenSeaAsset => {
  const assetContract = {
    ...asset.assetContract,
    wikiLink: null,
  };
  const collection = {
    ...asset.collection,
    createdDate: null,
    editors: null,
  };
  return {
    ...asset,
    assetContract,
    collection,
  };
};

export const openSeaPort = new OpenSeaPort(ethersProvider, {
  networkName: config.isTestnet ? Network.Rinkeby : Network.Main,
});
