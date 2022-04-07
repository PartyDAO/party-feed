import axios from "axios";
import { PartyEvent } from "types";

/**
 * Verify a proxy contract using the etherscan api
 * etherscan docs - https://docs.etherscan.io/api-endpoints/contracts#verify-proxy-contract
 * @param {string} address - party address
 * @returns {boolean} - true if verified, false otherwise
 */
export const verifyProxyContract = async (
  address: string
): Promise<boolean> => {
  if (!address) {
    throw new Error("Missing argument: address");
  }

  try {
    const resp = await axios.post(
      `https://api.etherscan.io/api?module=contract&action=verifyproxycontract&apikey=${ETHERSCAN_API_KEY}`,
      { address }
    );

    if (!(resp && resp.data)) {
      throw new Error(`Invalid response from Etherscan API for ${address}`);
    }
    const { data } = resp;
    if (data.status === "1" && data.result) {
      console.log(
        `Successfully verified proxy contract for ${address}. guid ${data.result}.`
      );
      return true;
    } else {
      throw new Error(`Could not verify proxy contract for ${address}`);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

/**
 * verify proxy contract on etherscan if the event is a start event
 * @param {PartyEvent} event
 * @returns true/false if verified
 */
export const verifyProxyContractForStartEvent = async (
  event: PartyEvent
): Promise<boolean> => {
  if (event.eventType === "start") {
    const { partyAddress } = event.party;
    return verifyProxyContract(partyAddress);
  }
};
