import { ethersProvider } from "./ethereum";
import { getRedisAsync, setRedisAsync } from "./redis_util";

const LAST_BLOCK_KEY_NAME = "last_block";
const IS_RUNNING_KEY_NAME = "is_running";
const RUNNING_TIMESTAMP_KEY = "is_running";

const ONE_MINUTE = 60;
const RESET_RUNNING_THRESHOLD_SECONDS = ONE_MINUTE * 30; // 30 mins

export const getLastBlockAlerted = async (): Promise<number | undefined> => {
  const foundVal = await getRedisAsync(LAST_BLOCK_KEY_NAME);
  if (!foundVal) {
    return undefined;
  }
  return parseInt(foundVal);
};

const getIsRunningTimestamp = async () => {
  const res = await getRedisAsync(RUNNING_TIMESTAMP_KEY);
  return res ? parseInt(res) : 0;
};

export const setIsRunningTimestamp = async () => {
  const unixTimeInMs = new Date().valueOf();
  await setRedisAsync(RUNNING_TIMESTAMP_KEY, unixTimeInMs.toString());
};
export const setIsNotRunningTimestamp = async () => {
  await setRedisAsync(RUNNING_TIMESTAMP_KEY, "0");
};

export const fetchIsRunningTimestamp = async () => {
  const runningTimestamp = await getIsRunningTimestamp();
  console.log({ runningTimestamp });
  if (runningTimestamp === 0) {
    return false;
  }

  // check to see if expired
  const curTimeMs = new Date().valueOf();
  const secondsBetweenRuns = (curTimeMs - runningTimestamp) / 1000;
  console.log({ secondsBetweenRuns });
  if (secondsBetweenRuns >= RESET_RUNNING_THRESHOLD_SECONDS) {
    console.log(
      "reset running because running for ",
      secondsBetweenRuns,
      "seconds"
    );
    await setIsNotRunningTimestamp();
    return false;
  }
  return true;
};

export const setLastBlockAlerted = async (blockNumber: number) => {
  await setRedisAsync(LAST_BLOCK_KEY_NAME, blockNumber.toString());
};
