import axios from "axios";
import { config } from "../config";
import { PartyEvent } from "types";
import {
  getEtherscanVerifyProxyContractGuid,
  setEtherscanVerifyProxyContractGuid,
} from "./helpers";

/**
 * Verify a proxy contract using the etherscan api
 * etherscan docs - https://docs.etherscan.io/api-endpoints/contracts#verify-proxy-contract
 * @param {string} address - party address
 * @returns {{ isSuccess: boolean, guid?: string}} - true if verified, false otherwise
 */
export const verifyProxyContract = async (
  address: string
): Promise<{ isSuccess: boolean; guid?: string }> => {
  if (!address) {
    throw new Error("Missing argument: address");
  }

  try {
    const params = new URLSearchParams();
    params.append("address", address);
    const resp = await axios.post(
      `${config.etherscan.apiBase}/?module=contract&action=verifyproxycontract&apikey=${config.etherscan.apiKey}`,
      params
    );

    if (!(resp && resp.data)) {
      throw new Error(`Invalid response from Etherscan API for ${address}`);
    }
    const { data } = resp;
    console.log("etherscan:: data", data);
    if (data.status === "1" && data.result) {
      const guid = data.result;
      console.log(
        `etherscan:: successfully verified proxy contract for ${address}. guid ${guid}.`
      );
      return { isSuccess: true, guid };
    } else {
      throw new Error(`Could not verify proxy contract for ${address}`);
    }
  } catch (error) {
    console.error(error);
    return { isSuccess: false };
  }
};

/**
 * verify proxy contract on etherscan if the event is a start event
 * @param {PartyEvent} event
 * @returns true/false if verified
 */
export const verifyProxyContractForEvent = async (
  event: PartyEvent
): Promise<boolean> => {
  // todo: check etherscan API to see if collection party source code is verified
  // and save value in redis
  const { partyAddress } = event.party;

  const existingGuid = await getEtherscanVerifyProxyContractGuid(partyAddress);
  if (existingGuid) {
    // we have already made an api request to etherscan to verify this proxy contract
    return;
  }

  const { isSuccess, guid } = await verifyProxyContract(partyAddress);
  if (isSuccess && guid) {
    await setEtherscanVerifyProxyContractGuid(partyAddress, guid);
  }
  return isSuccess;
};
