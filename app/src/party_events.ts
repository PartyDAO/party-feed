import { getRedisAsync, setRedisAsync } from "./redis_util";
import {
  Bid,
  Contribution,
  getAllPartyBidsDeployed,
  getBids,
  getContributions,
  PartyInfo,
  Finalization,
  getFinalizations,
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
interface FinalizationPartyEvent {
  eventType: "finalization";
  finalization: Finalization;
  party: PartyInfo;
}
export type PartyEvent =
  | StartPartyEvent
  | BidPartyEvent
  | ContributionPartyEvent
  | FinalizationPartyEvent;

export const haveSeenTxHash = async (txHash: string) => {
  const key = `tx_seen_${txHash}`;
  const res = await getRedisAsync(key);
  if (res) {
    console.info(`already alerted about tx ${txHash}`);
    return true;
  } else {
    console.info(`have NOT alerted about tx${txHash}`);
    await setRedisAsync(key, "true");
    return false;
  }
};

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
  //  console.log("parties", JSON.stringify(partyBids));

  const events: PartyEvent[] = [];

  console.log("**** GET ALL ***");

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
    const rawContributions = await getContributions(
      partyBid.partyBidAddress,
      fromBlock
    );

    const contributions: Contribution[] = [];
    for (const c of rawContributions) {
      const haveSeen = await haveSeenTxHash(c.txHash);
      if (!haveSeen) {
        contributions.push(c);
      }
    }

    const contribEvents: ContributionPartyEvent[] = contributions.map((c) => {
      return {
        eventType: "contribution",
        contribution: c,
        party: partyBid,
      };
    });
    events.push(...contribEvents);

    // add new bids
    const rawBids = await getBids(partyBid.partyBidAddress, fromBlock);
    const bids: Bid[] = [];
    for (const b of rawBids) {
      const haveSeen = await haveSeenTxHash(b.txHash);
      if (!haveSeen) {
        bids.push(b);
      }
    }
    const bidEvents: BidPartyEvent[] = bids.map((b) => {
      return {
        eventType: "bid",
        bid: b,
        party: partyBid,
      };
    });
    events.push(...bidEvents);

    // add new finalizations
    const rawFinalizations = await getFinalizations(
      partyBid.partyBidAddress,
      fromBlock
    );

    const finalizations: Finalization[] = [];
    for (const f of rawFinalizations) {
      const haveSeen = await haveSeenTxHash(f.txHash);
      if (!haveSeen) {
        finalizations.push(f);
      }
    }
    const finalEvents: FinalizationPartyEvent[] = finalizations.map((b) => {
      return {
        eventType: "finalization",
        finalization: b,
        party: partyBid,
      };
    });
    events.push(...finalEvents);
  }
  return events;
};
