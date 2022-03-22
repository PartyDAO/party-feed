import { getLastKnownBlockNumber } from "./fetchers";
import { alertDiscord } from "./discord";
import { postTweetIfRelevant } from "./twitter";
import { getAllPartyEvents } from "./party_events";
import {
  fetchIsRunningTimestamp,
  getLastBlockAlerted,
  setIsNotRunningTimestamp,
  setIsRunningTimestamp,
  setLastBlockAlerted,
} from "./storage";
import delay from "delay";

const DEFAULT_START_BLOCK = 13839598;

const alertForBlocks = async (fromBlock: number) => {
  const allNewEvents = await getAllPartyEvents(fromBlock);
  console.log(`Alerting on ${allNewEvents.length} events`);
  for (const newEvent of allNewEvents) {
    await alertDiscord(newEvent);
    try {
      await postTweetIfRelevant(newEvent);
    } catch (e) {
      console.error("Error posting to twitter");
      console.error(e);
    }
    await delay(2000);
  }
};

const checkBlockNum = async () => {
  const lastBlockNum = await getLastBlockAlerted();
  if (!lastBlockNum) {
    await setLastBlockAlerted(DEFAULT_START_BLOCK);
    console.info(
      `~*~*~* Block number set to latest ${DEFAULT_START_BLOCK} ~*~*~*`
    );
  }
};

const tick = async () => {
  await checkBlockNum();

  const isRunning = await fetchIsRunningTimestamp();
  if (isRunning) {
    console.log(`Not ticking because running.`);
    return;
  }

  console.log(`${new Date().toLocaleString()} Ticking...`);

  const lastBlockAlerted = await getLastBlockAlerted();
  if (!lastBlockAlerted) {
    throw new Error(`No last block set`);
  }

  const lastBlock = await getLastKnownBlockNumber();
  console.info(`Querying from `, lastBlockAlerted, "to", lastBlock);

  await setIsRunningTimestamp();
  try {
    await alertForBlocks(lastBlockAlerted);
    console.log(
      `Tick successfully completed from ${lastBlockAlerted} to ${lastBlock}`
    );
    console.log("setting lastBlock", lastBlock);
    await setLastBlockAlerted(lastBlock);
  } catch (e) {
    console.log("error");
    console.error(e);
    console.log("Tick errored out.");
  } finally {
    await setIsNotRunningTimestamp();
  }
};

tick().then(() => {
  process.exit();
});
