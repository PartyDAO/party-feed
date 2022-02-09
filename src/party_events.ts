import {
  getBids,
  getContributions,
  getCreations,
  getFinalizations,
} from "./fetchers";
import { getRedisAsync, setRedisAsync } from "./redis_util";
import {
  getHaveAlertedAboutNewPartyCacheKey,
  getHaveAlertedAboutPartyHalfwayCacheKey,
} from "./redis_key_util";
import {
  PartyEvent,
  StartPartyEvent,
  ContributionPartyEvent,
  BidPartyEvent,
  FinalizationPartyEvent,
} from "./types";

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

export const getAllPartyEvents = async (fromBlock: number) => {
  const events: PartyEvent[] = [];

  console.log("**** GET ALL ***");

  const startEvents: StartPartyEvent[] = [];
  const creations = await getCreations(fromBlock);
  for (const cr of creations) {
    const haveSeen = await haveSeenTxHash(cr.txHash);
    if (!haveSeen) {
      startEvents.push(cr);
    }
  }
  events.push(...startEvents);

  // add new contributions
  const rawContributions = await getContributions(fromBlock);
  const contributions: ContributionPartyEvent[] = [];
  for (const c of rawContributions) {
    const haveSeen = await haveSeenTxHash(c.txHash);
    if (!haveSeen) {
      contributions.push(c);
    }
  }
  events.push(...contributions);

  // add new bids
  const rawBids = await getBids(fromBlock);
  const bids: BidPartyEvent[] = [];
  for (const b of rawBids) {
    const haveSeen = await haveSeenTxHash(b.txHash);
    if (!haveSeen) {
      bids.push(b);
    }
  }
  events.push(...bids);

  // add new finalizations
  const rawFinalizations = await getFinalizations(fromBlock);
  const finalizations: FinalizationPartyEvent[] = [];
  for (const f of rawFinalizations) {
    const haveSeen = await haveSeenTxHash(f.txHash);
    if (!haveSeen) {
      finalizations.push(f);
    }
  }
  events.push(...finalizations);

  return events;
};

export const haveAlertedAboutNewParty = async (
  partyAddress: string
): Promise<boolean> => {
  const key = getHaveAlertedAboutNewPartyCacheKey(partyAddress);
  const res = await getRedisAsync(key);
  if (res) {
    console.info(
      `already alerted about new party with contribution ${partyAddress}`
    );
    return true;
  } else {
    console.info(
      `have NOT alerted about new party with contribution ${partyAddress}`
    );
    return false;
  }
};

export const setHaveAlertedAboutNewParty = async (partyAddress: string) => {
  const key = getHaveAlertedAboutNewPartyCacheKey(partyAddress);
  console.info(`setting new party with contribution ${partyAddress}`);
  await setRedisAsync(key, "true");
};

export const haveAlertedAboutPartyHalfway = async (
  partyAddress: string
): Promise<boolean> => {
  const key = getHaveAlertedAboutPartyHalfwayCacheKey(partyAddress);
  const res = await getRedisAsync(key);
  if (res) {
    console.info(
      `already alerted about new party with contribution ${partyAddress}`
    );
    return true;
  } else {
    console.info(
      `have NOT alerted about new party with contribution ${partyAddress}`
    );
    return false;
  }
};

export const setHaveAlertedAboutPartyHalfway = async (partyAddress: string) => {
  const key = getHaveAlertedAboutPartyHalfwayCacheKey(partyAddress);
  console.info(`setting party halfway ${partyAddress}`);
  await setRedisAsync(key, "true");
};
