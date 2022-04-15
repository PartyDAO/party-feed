import {
  getEtherscanVerifyContractGuidKey,
  getEtherscanVerifyProxyContractGuidKey,
} from "../redis_key_util";
import { getRedisAsync, setRedisAsync } from "../redis_util";

export const getEtherscanVerifyContractGuid = async (
  partyAddress: string
): Promise<boolean> => {
  const key = getEtherscanVerifyContractGuidKey(partyAddress);
  const res = await getRedisAsync(key);
  if (res) {
    console.info(
      `already verified contract for party ${partyAddress} guid ${res}`
    );
    return true;
  } else {
    console.info(`have NOT verified contract for party ${partyAddress}`);
    return false;
  }
};

export const setEtherscanVerifyContractGuid = async (
  partyAddress: string,
  guid: string
) => {
  const key = getEtherscanVerifyContractGuidKey(partyAddress);
  console.info(
    `setting etherscan contract verification guid ${guid} for party ${partyAddress}`
  );
  await setRedisAsync(key, guid);
};

export const getEtherscanVerifyProxyContractGuid = async (
  partyAddress: string
): Promise<boolean> => {
  const key = getEtherscanVerifyProxyContractGuidKey(partyAddress);
  const res = await getRedisAsync(key);
  if (res) {
    console.info(
      `already verified proxy contract for party ${partyAddress} guid ${res}`
    );
    return true;
  } else {
    console.info(`have NOT verified proxy contract for party ${partyAddress}`);
    return false;
  }
};

export const setEtherscanVerifyProxyContractGuid = async (
  partyAddress: string,
  guid: string
) => {
  const key = getEtherscanVerifyProxyContractGuidKey(partyAddress);
  console.info(
    `setting etherscan proxy contract verification guid ${guid} for party ${partyAddress}`
  );
  await setRedisAsync(key, guid);
};
