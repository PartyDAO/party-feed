import { collectionPartyLogicAddress, collectionParties } from "./constants";
import { verifyCollectionParty } from "./verifyCollectionPartyContract";
import { verifyProxyContract } from "./verifyProxyContract";

const sleep = () =>
  new Promise((resolve, reject) => {
    console.log("sleeping");
    setTimeout(() => resolve(true), 5000);
  });

const step = 3;

export const runner = async () => {
  const totalParties = collectionParties.length;
  for (let i = 0; i < totalParties; i += step) {
    const currParties = collectionParties.slice(i, i + step);

    console.log("verifying party contracts for", currParties);
    const partyVerifyPromises = currParties.map((party) =>
      // verifyProxyContract(party.partyAddress, party.transactionHash)
      verifyProxyContract(party.partyAddress, collectionPartyLogicAddress)
    );

    await Promise.all([...partyVerifyPromises, sleep()]);
  }
  console.log("done");
};
