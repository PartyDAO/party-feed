import { ContributionPartyEvent } from "types";
import { ethersProvider } from "./ethereum";

export const bestUserName = async (address: string): Promise<string> => {
  const ens = await ethersProvider.lookupAddress(address);
  if (ens) {
    return ens;
  } else {
    return address;
  }
};

export const getIsNewPartyWithContribution = (
  event: ContributionPartyEvent
): boolean => {
  const { createdBy } = event.party;
  const { amountInEth, contributorAddress } = event.contribution;

  if (contributorAddress.toLowerCase() === createdBy.toLowerCase()) {
    return false;
  }

  if (amountInEth)
    // get all contributions
    // filter out contributions by creator
    // if length of resulting list is 0 OR > 1, return false
    // if length of resulting list is 1, true
    return false;
};

export const getIsPartyHalfWay = (event: ContributionPartyEvent): boolean => {
  const { party } = event;
  // get all contributions
  // add up all contributions until amount raised >= (amountNeeded / 2)
  // if the contributions list after this contribution is length 0, return true
  // otherwise, return false
  return false;
};
