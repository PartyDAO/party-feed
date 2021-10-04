import { alertDiscord } from "./discord";
import { getAllPartyEvents } from "./party_events";
import { ethersProvider } from "./ethereum";
import {
  getAppropriateEndingBlock,
  getLastBlockAlerted,
  setLastBlockAlerted,
} from "./storage";
import axios from "axios";
import * as fs from "fs";
import { schedule } from "node-cron";
import delay from "delay";

const alertForBlocks = async (fromBlock: number) => {
  const allNewEvents = await getAllPartyEvents(fromBlock);
  console.log(`Alerting on ${allNewEvents.length} events`);
  for (const newEvent of allNewEvents) {
    await alertDiscord(newEvent);
    await delay(2000);
  }
};

const checkBlockNum = async () => {
  const lastBlockNum = await getLastBlockAlerted();
  if (!lastBlockNum) {
    const blockNumber = 12862631;
    await setLastBlockAlerted(blockNumber);
    console.info(`Block number set to latest ${blockNumber} -- restart`);
    process.exit();
  }
};

let isRunning = false;
const tick = async () => {
  if (isRunning) {
    console.log(`Not ticking because running`);
    return;
  }

  console.log(`${new Date().toLocaleString()} Ticking...`);

  await checkBlockNum();
  const lastBlockAlerted = await getLastBlockAlerted();
  if (!lastBlockAlerted) {
    throw new Error(`No last block set`);
  }
  console.info(`Querying for `, { lastBlockAlerted });

  const lastBlock = await ethersProvider.getBlockNumber();
  isRunning = true;
  try {
    // TICK LOGIC HERE
    await alertForBlocks(lastBlockAlerted);
    console.log("Tick successfully completed", { lastBlockAlerted });
  } catch (e) {
    console.log("error");
    console.error(e);
    console.log("Tick errored out.");
  } finally {
    await setLastBlockAlerted(lastBlock);
    isRunning = false;
  }
};

tick();
schedule("*/2 * * * *", tick);
