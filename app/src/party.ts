import { getPartyBidInstance, partyBidFactory } from "./ethereum";

export interface PartyInfo {
  partyBidAddress: string;
  creatorAddress: string;
  nftContract: string;
  nftTokenId: number;
  marketWrapper: string;
  auctionId: number;
  name: string;
  tokenSymbol: string;
}

export const getAllPartyBidsDeployed = async (): Promise<PartyInfo[]> => {
  const deployEvents = await partyBidFactory.queryFilter(
    partyBidFactory.filters.PartyBidDeployed(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    )
  );
  return deployEvents.map((d) => {
    return {
      partyBidAddress: d.args[0],
      creatorAddress: d.args[1],
      nftContract: d.args[2],
      nftTokenId: parseInt(d.args[3].toString()),
      marketWrapper: d.args[4],
      auctionId: parseInt(d.args[5].toString()),
      name: d.args[6],
      tokenSymbol: d.args[7],
    };
  });
};

export interface Contribution {
  contributorAddress: string;
  amountInEth: string;
}
export const getContributions = async (
  address: string,
  fromBlock: number
): Promise<Contribution[]> => {
  const party = getPartyBidInstance(address);
  const contribEvents = await party.queryFilter(
    party.filters.Contributed(null, null, null, null),
    fromBlock
  );
  return contribEvents.map((c) => {
    return {
      contributorAddress: c.args[0],
      amountInEth: (parseInt(c.args[1].toString()) / 10 ** 18).toLocaleString(),
    };
  });
};

export interface Bid {
  amountInEth: string;
}
export const getBids = async (
  address: string,
  fromBlock: number
): Promise<Bid[]> => {
  const party = getPartyBidInstance(address);
  const bidEvents = await party.queryFilter(party.filters.Bid(null), fromBlock);
  return bidEvents.map((c) => {
    return {
      amountInEth: (parseInt(c.args[0].toString()) / 10 ** 18).toLocaleString(),
    };
  });
};
