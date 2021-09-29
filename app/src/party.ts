import {
  getPartyBidInstance,
  partyBidFactory1,
  partyBidFactory2,
  partyBidV2Factory,
} from "./ethereum";

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
  const deployEvents1 = await partyBidFactory1.queryFilter(
    partyBidFactory1.filters.PartyBidDeployed(
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
  const deployEvents2 = await partyBidFactory2.queryFilter(
    partyBidFactory2.filters.PartyBidDeployed(
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
  const allDeployEvents = deployEvents1.concat(...deployEvents2);
  const allV1Parties = allDeployEvents.map((d) => {
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

  const allV2Events = await partyBidV2Factory.queryFilter(
    partyBidV2Factory.filters.PartyBidDeployed(
      null,
      null,
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
  const allV2Parties = allV2Events.map((d) => {
    return {
      partyBidAddress: d.args[0],
      creatorAddress: d.args[1],
      nftContract: d.args[2],
      nftTokenId: parseInt(d.args[3].toString()),
      marketWrapper: d.args[4],
      auctionId: parseInt(d.args[5].toString()),
      name: d.args[8],
      tokenSymbol: d.args[9],
    };
  });

  return allV1Parties.concat(...allV2Parties);
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

export interface Finalization {
  won: boolean;
  totalSpentInEth: string;
}
export const getFinalizations = async (
  address: string,
  fromBlock: number
): Promise<Finalization[]> => {
  const party = getPartyBidInstance(address);
  const finalEvents = await party.queryFilter(
    party.filters.Finalized(null, null, null, null),
    fromBlock
  );
  return finalEvents.map((c) => {
    const finalization: Finalization = {
      won: parseInt(c.args[0].toString()) == 1,
      totalSpentInEth: (
        parseInt(c.args[1].toString()) /
        10 ** 18
      ).toLocaleString(),
    };
    return finalization;
  });
};
