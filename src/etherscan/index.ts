import { PartyEvent } from "types";
import { verifyCollectionPartyContractForEvent } from "./verifyCollectionPartyContract";
import { verifyProxyContractForEvent } from "./verifyProxyContract";

const etherscanTasks = async (event: PartyEvent) => {
  // verify the collection party source code
  if (event.party.partyType === "collection") {
    await verifyCollectionPartyContractForEvent(event);
  }

  // do not attempt to verify the proxy contract on the start party event. this is to
  // prevent a race condition where the we attempt to verify the contract source and
  // proxy contract source at the same time. the party contract must be verified before
  // the proxy contract can be verified. it takes a considerable amount of time to
  // verify the party contract, therefore verifying the party contract and proxy contract
  // at the same time will always result in the proxy contract not being verified.
  if (event.eventType !== "start") {
    // verify the proxy contract for the party contract
    await verifyProxyContractForEvent(event);
  }
};

export default etherscanTasks;
