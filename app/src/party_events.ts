import { getRedisAsync, setRedisAsync } from "./redis_util";
import {
  Bid,
  Contribution,
  getAllPartyBidsDeployed,
  getBids,
  getContributions,
  PartyInfo,
} from "./party";

interface StartPartyEvent {
  eventType: "start";
  party: PartyInfo;
}
interface BidPartyEvent {
  eventType: "bid";
  bid: Bid;
  party: PartyInfo;
}
interface ContributionPartyEvent {
  eventType: "contribution";
  contribution: Contribution;
  party: PartyInfo;
}
export type PartyEvent =
  | StartPartyEvent
  | BidPartyEvent
  | ContributionPartyEvent;

export const haveSeenParty = async (address: string) => {
  const key = `party_seen_${address}`;
  const res = await getRedisAsync(key);
  if (res) {
    console.info(`already alerted about start of ${address}`);
    return true;
  } else {
    console.info(`have NOT alerted about start of ${address}`);
    await setRedisAsync(key, "true");
    return false;
  }
};

export const getAllPartyEvents = async (fromBlock: number) => {
  // get all parties
  const partyBids = await getAllPartyBidsDeployed();
  console.log("parties", JSON.stringify(partyBids));

  const events: PartyEvent[] = [];

  for (const partyBid of partyBids) {
    // add 'StartPartyEvent' if we haven't seen it before
    const hasSeenCreation = await haveSeenParty(partyBid.partyBidAddress);
    if (!hasSeenCreation) {
      const creationEvent: StartPartyEvent = {
        eventType: "start",
        party: partyBid,
      };
      events.push(creationEvent);
    }

    // add new contributions
    const contributions = await getContributions(
      partyBid.partyBidAddress,
      fromBlock
    );
    const contribEvents: ContributionPartyEvent[] = contributions.map((c) => {
      return {
        eventType: "contribution",
        contribution: c,
        party: partyBid,
      };
    });
    events.push(...contribEvents);

    // add new bids
    const bids = await getBids(partyBid.partyBidAddress, fromBlock);
    const bidEvents: BidPartyEvent[] = bids.map((b) => {
      return {
        eventType: "bid",
        bid: b,
        party: partyBid,
      };
    });
    events.push(...bidEvents);
  }
  return events;
};
