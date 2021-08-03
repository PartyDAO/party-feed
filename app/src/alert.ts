// import { alertDiscord } from "./discord";
// import { ethers } from "ethers";
// // import { ratsContract } from "./ethereum";
// import * as _ from "lodash";

// export const alertForBlocks = async (
//   startingBlock: number,
//   endingBlock: number
// ) => {
//   const allEvents = await ratsContract.queryFilter(
//     { address: ratsContract.address },
//     startingBlock,
//     endingBlock
//   );
//   const txnHashes = _.uniq(allEvents.map((e) => e.transactionHash));
//   const txnHashToEvents: {
//     [txnHash: string]: ethers.Event[];
//   } = {};
//   txnHashes.forEach((txHash) => {
//     const theEvents = allEvents.filter((e) => e.transactionHash === txHash);
//     txnHashToEvents[txHash] = theEvents;
//   });

//   for (let i = 0; i < txnHashes.length; i++) {
//     const txnHash = txnHashes[i];
//     const events = txnHashToEvents[txnHash];
//     console.info(`Alerting for ${txnHash}`);

//     const giveItem = await getGiveItem(events);
//     const receiveItem = await getReceiveItem(events);
//     if (giveItem.type === "token" && receiveItem.type === "token") {
//       console.warn(`Not alerting because it's a transfer`);
//     } else {
//       await alertDiscord({ giveItem, receiveItem, txnHash });
//     }
//   }
// };
