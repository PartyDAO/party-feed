import axios from "axios";
import { BigNumber } from "ethers";
import { ContributionPartyEvent } from "types";
import { ethersProvider } from "./ethereum";
import {
  getHaveAlertedAboutNewParty,
  getHaveAlertedAboutPartyHalfway,
  setHaveAlertedAboutNewParty,
  setHaveAlertedAboutPartyHalfway,
} from "./party_events";

export const bestUserName = async (address: string): Promise<string> => {
  const ens = await ethersProvider.lookupAddress(address);
  if (ens) {
    return ens;
  } else {
    return address;
  }
};

export const getShouldAlertAboutNewParty = async (
  event: ContributionPartyEvent
): Promise<boolean> => {
  const { partyAddress, createdBy } = event.party;

  // check redis to see if alert has already been sent
  const hasSet = await getHaveAlertedAboutNewParty(partyAddress);
  if (hasSet) {
    return false;
  }

  // do not alert for the case that the creator started the party, and made a contribution
  const { contributorAddress } = event.contribution;
  if (contributorAddress.toLowerCase() !== createdBy.toLowerCase()) {
    await setHaveAlertedAboutNewParty(partyAddress);
    return true;
  }

  // otherwise
  return false;
};

export const getShouldAlertAboutPartyHalfWay = async (
  event: ContributionPartyEvent
): Promise<boolean> => {
  const { party } = event;
  const { partyAddress } = party;

  // check redis to see if alert has already been sent
  const hasSet = await getHaveAlertedAboutPartyHalfway(partyAddress);
  if (hasSet) {
    return false;
  }

  const API_ENDPOINT = "https://partybid.app/api/party/price_details";
  const totalEthNeeded = await axios.get<{ totalEthNeeded: string }>(
    `${API_ENDPOINT}?address=${event.party.partyAddress}&type=${event.party.partyType}`
  );

  // convert wei values to BigNumbers
  const totalEthNeededBN = BigNumber.from(totalEthNeeded);
  const totalContributionAmountBN = BigNumber.from(
    event.contribution.totalAmountContributedToParyInWei
  );

  // BN.js cannot handle decimal values, so instead we multiply the total contributions by 2 and compare to
  // total eth needed
  const isPartyHalfway = totalContributionAmountBN.mul(2).gte(totalEthNeededBN);
  if (isPartyHalfway) {
    await setHaveAlertedAboutPartyHalfway(partyAddress);
    return true;
  }

  // otherwise
  return false;
};
