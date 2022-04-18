import axios from "axios";
import { config } from "../config";
import { partyLogicAddresses } from "./constants";
import { PartyEvent } from "types";
import {
  getEtherscanVerifyContractGuid,
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
  expectedImplementationAddress?: string
): Promise<{ isSuccess: boolean; guid?: string }> => {
  if (!address) {
    throw new Error("Missing argument: address");
  }

  try {
    const params = new URLSearchParams();
    params.append("address", address);
    // note: if expectedImplementationAddress is not provided, etherscan will try to determine the implementation
    // based on similar contracts
    if (expectedImplementationAddress) {
      params.append("expectedimplementation", expectedImplementationAddress);
    }
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
  const { partyAddress, partyType } = event.party;

  // first check to see if we have verified the NonReceivableInitializedProxy party contract.
  // if the party contract is not verified, we cannot verify the proxy contract.
  const existingVerifyContractGuid = await getEtherscanVerifyContractGuid(
    partyAddress
  );
  if (!existingVerifyContractGuid) {
    // if we have not verified the party contract, do not try to verify the proxy contract
    return;
  }

  // next, check to see if we have perviously attempted to verify the proxy contract
  const existingVerifyProxyContractGuid = await getEtherscanVerifyProxyContractGuid(
    partyAddress
  );
  if (existingVerifyProxyContractGuid) {
    // we have already made an api request to etherscan to verify this proxy contract
    return;
  }

  const logicAddress: string = partyLogicAddresses[partyType];
  const { isSuccess, guid } = await verifyProxyContract(partyAddress, logicAddress);
  if (isSuccess && guid) {
    await setEtherscanVerifyProxyContractGuid(partyAddress, guid);
  }
  return isSuccess;
};
