import { PartyEvent } from "types";
import { verifyCollectionPartyContractForEvent } from "./verifyCollectionPartyContract";
import { verifyProxyContractForEvent } from "./verifyProxyContract";

const etherscanTasks = async (event: PartyEvent) => {
  console.log("etherscanTasks called with event", event);
  // verify the collection party source code
  if (event.party.partyType === "collection") {
    await verifyCollectionPartyContractForEvent(event);
  }

  // verify the proxy contract for the party contract
  await verifyProxyContractForEvent(event);
};

export default etherscanTasks;
