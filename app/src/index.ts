import { ethersProvider } from "./ethereum";
import { alertForBlocks } from "./alert";
import {
  getAppropriateEndingBlock,
  getLastBlockAlerted,
  setLastBlockAlerted,
} from "./storage";
// import { twitterClient, uploadTwitterImage } from "./twitter";
import axios from "axios";
import * as fs from "fs";
import { schedule } from "node-cron";

const checkBlockNum = async () => {
  const lastBlockNum = await getLastBlockAlerted();
  if (!lastBlockNum) {
    const blockNumber = await ethersProvider.getBlockNumber();
    await setLastBlockAlerted(blockNumber);
    console.info(`Block number set to latest ${blockNumber} -- restart`);
    process.exit();
  }
};
checkBlockNum();

let isRunning = false;
const tick = async () => {
  if (isRunning) {
    console.log(`Not ticking because running`);
    return;
  }

  console.log(`${new Date().toLocaleString()} Ticking...`);

  const lastBlockAlerted = await getLastBlockAlerted();
  if (!lastBlockAlerted) {
    throw new Error(`No last block set`);
  }
  const endingBlock = await getAppropriateEndingBlock();
  console.info(`Querying for `, { lastBlockAlerted, endingBlock });

  isRunning = true;
  try {
    // TICK LOGIC HERE
    await alertForBlocks(lastBlockAlerted, endingBlock);
    console.log("Tick successfully completed");
  } catch (e) {
    console.log("error");
    console.error(e);
    console.log("Tick errored out.");
  } finally {
    await setLastBlockAlerted(endingBlock);
    isRunning = false;
  }
};

tick();
schedule("*/2 * * * *", tick);
