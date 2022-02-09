export interface PartyInfo {
  name: string;
  partyType: string;
  partyAddress: string;
  nftContractAddress: string;
  nftTokenId?: number;
  symbol: string;
  createdBy: string;
}

export interface Bid {
  amountInEth: string;
}

export interface Contribution {
  contributorAddress: string;
  amountInEth: string;
}

export interface Finalization {
  won: boolean;
  totalSpentInEth: string;
}

export interface StartPartyEvent {
  eventType: "start";
  party: PartyInfo;
  txHash: string;
}
export interface BidPartyEvent {
  eventType: "bid";
  bid: Bid;
  party: PartyInfo;
  txHash: string;
}
export interface ContributionPartyEvent {
  eventType: "contribution";
  contribution: Contribution;
  party: PartyInfo;
  txHash: string;
}
export interface FinalizationPartyEvent {
  eventType: "finalization";
  finalization: Finalization;
  party: PartyInfo;
  txHash: string;
}
export type PartyEvent =
  | StartPartyEvent
  | BidPartyEvent
  | ContributionPartyEvent
  | FinalizationPartyEvent;
