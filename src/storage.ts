import { ethersProvider } from "./ethereum";
import { getRedisAsync, setRedisAsync } from "./redis_util";

const LAST_BLOCK_KEY_NAME = "last_block";
const IS_RUNNING_KEY_NAME = "is_running";

export const getLastBlockAlerted = async (): Promise<number | undefined> => {
  const foundVal = await getRedisAsync(LAST_BLOCK_KEY_NAME);
  if (!foundVal) {
    return undefined;
  }
  return parseInt(foundVal);
};

export const setIsRunning = async () => {
  await setRedisAsync(IS_RUNNING_KEY_NAME, "true");
};
export const setIsNotRunning = async () => {
  await setRedisAsync(IS_RUNNING_KEY_NAME, "false");
};
export const getIsRunning = async () => {
  const res = await getRedisAsync(IS_RUNNING_KEY_NAME);
  return res === "true";
};

export const setLastBlockAlerted = async (blockNumber: number) => {
  await setRedisAsync(LAST_BLOCK_KEY_NAME, blockNumber.toString());
};
