import { config } from "./config";
import { Chain, order_by } from "./zeus";
import {
  Bid,
  Contribution,
  ContributionPartyEvent,
  Finalization,
  FinalizationPartyEvent,
  BidPartyEvent,
  StartPartyEvent,
  PartyInfo,
} from "./types";
import { BigNumber } from "ethers";

const chain = Chain(config.hasuraUrl);

const PARTY_ATTRIBUTES: {
  name: true;
  partyType: true;
  partyAddress: true;
  nftTokenId: true;
  nftContractAddress: true;
  symbol: true;
  createdBy: true;
} = {
  name: true,
  partyType: true,
  partyAddress: true,
  nftTokenId: true,
  nftContractAddress: true,
  symbol: true,
  createdBy: true,
};

const lookupAttrs = (fromBlock: number) => {
  return {
    where: { blockNumber: { _gte: fromBlock } },
    order_by: [{ blockNumber: order_by.asc }],
  };
};

export const getCreations = async (
  fromBlock: number
): Promise<StartPartyEvent[]> => {
  const zr = await chain("query")({
    party_created: [
      lookupAttrs(fromBlock),
      {
        party: PARTY_ATTRIBUTES,
        createdBy: true,
        blockNumber: true,
        transactionHash: true,
      },
    ],
  });
  return zr.party_created.map(
    (c): StartPartyEvent => {
      return {
        eventType: "start",
        party: c.party,
        txHash: c.transactionHash,
      };
    }
  );
};

export const getContributions = async (
  fromBlock: number
): Promise<ContributionPartyEvent[]> => {
  const zr = await chain("query")({
    party_contribution: [
      lookupAttrs(fromBlock),
      {
        party: PARTY_ATTRIBUTES,
        contributedBy: true,
        blockNumber: true,
        transactionHash: true,
        contributedAmountWei: true,
        previousTotalContributedToPartyWei: true,
      },
    ],
  });
  return zr.party_contribution.map(
    (c): ContributionPartyEvent => {
      return {
        eventType: "contribution",
        party: c.party,
        txHash: c.transactionHash,
        contribution: {
          contributorAddress: c.contributedBy,
          amountInEth: (parseInt(c.contributedAmountWei) / 10 ** 18).toString(),
          totalAmountContributedToPartyInWei: BigNumber.from(
            c.contributedAmountWei.toString()
          )
            .add(
              BigNumber.from(c.previousTotalContributedToPartyWei.toString())
            )
            .toString(),
        },
      };
    }
  );
};

export const getBids = async (fromBlock: number): Promise<BidPartyEvent[]> => {
  const zr = await chain("query")({
    bid: [
      lookupAttrs(fromBlock),
      {
        party: PARTY_ATTRIBUTES,
        amount: true,
        blockNumber: true,
        transactionHash: true,
      },
    ],
  });
  return zr.bid.map(
    (b): BidPartyEvent => {
      return {
        eventType: "bid",
        party: b.party,
        txHash: b.transactionHash,
        bid: {
          amountInEth: (parseInt(b.amount) / 10 ** 18).toString(),
        },
      };
    }
  );
};

export const getFinalizations = async (
  fromBlock: number
): Promise<FinalizationPartyEvent[]> => {
  const zr = await chain("query")({
    party_finalized: [
      lookupAttrs(fromBlock),
      {
        party: PARTY_ATTRIBUTES,
        blockNumber: true,
        transactionHash: true,
        totalSpentWei: true,
        result: true,
      },
    ],
  });
  return zr.party_finalized.map(
    (f): FinalizationPartyEvent => {
      const won = parseInt(f.result).toString() == "1";
      const finalization = {
        won: won,
        totalSpentInEth: (parseInt(f.totalSpentWei) / 10 ** 18).toString(),
      };

      return {
        eventType: "finalization",
        party: f.party,
        txHash: f.transactionHash,
        finalization: finalization,
      };
    }
  );
};

export const getLastKnownBlockNumber = async (): Promise<number> => {
  const zr = await chain("query")({
    run: [
      {
        where: { status: { _eq: "success" } },
        order_by: [{ ranAt: order_by.desc }],
        limit: 1,
      },
      {
        toBlock: true,
      },
    ],
  });
  return parseInt(zr.run[0].toBlock);
};
