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

export interface Bid {
  amountInEth: string;
  txHash: string;
}

export interface Contribution {
  contributorAddress: string;
  amountInEth: string;
  txHash: string;
}

export interface Finalization {
  won: boolean;
  totalSpentInEth: string;
  txHash: string;
}

export interface StartPartyEvent {
  eventType: "start";
  party: PartyInfo;
}
export interface BidPartyEvent {
  eventType: "bid";
  bid: Bid;
  party: PartyInfo;
}
export interface ContributionPartyEvent {
  eventType: "contribution";
  contribution: Contribution;
  party: PartyInfo;
}
export interface FinalizationPartyEvent {
  eventType: "finalization";
  finalization: Finalization;
  party: PartyInfo;
}
export type PartyEvent =
  | StartPartyEvent
  | BidPartyEvent
  | ContributionPartyEvent
  | FinalizationPartyEvent;
