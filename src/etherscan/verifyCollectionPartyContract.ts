import axios from "axios";
import { PartyEvent } from "types";
import { config } from "../config";
import { NonReceivableInitializedProxySourceCode } from "./constants";

type AlchemyTrace = {
  action: {
    from: string;
    gas: string;
    init: string;
    value: string;
  };
  blockHash: string;
  blockNumber: number;
  result: {
    address: string;
    code: string;
    gasUsed: string;
  };
  subtraces: number;
  traceAddress: string[];
  transactionHash: string;
  transactionPosition: number;
  type: "call" | "create";
};
type AlchemyTraceApiResponse = {
  result: Array<AlchemyTrace>;
};

/**
 *
 * @param {string} collectionPartyCreationTx tx of colection party creation
 * @returns contract creation bytecode
 */
const getContractCreationBytecode = async (
  collectionPartyCreationTx: string
): Promise<string> => {
  const resp = await axios.post<AlchemyTraceApiResponse>(
    `${config.alchemy.apiBase}/${config.alchemy.apiKey}`,
    {
      method: "trace_transaction",
      params: [collectionPartyCreationTx],
      id: 1,
      jsonrpc: "2.0",
    }
  );

  if (!(resp && resp.data && resp.data.result && resp.data.result.length)) {
    throw new Error(
      `Could not fetch tx data from alchemy for tx: ${collectionPartyCreationTx}`
    );
  }
  const { result } = resp.data;
  const createTraceArr = result.filter(
    (trace: AlchemyTrace) => trace.type === "create"
  );

  if (!createTraceArr.length) {
    throw new Error(
      `Could not find create trace for tx: ${collectionPartyCreationTx}`
    );
  }

  const createTrace = createTraceArr[0];
  const contractCreationBytecode = createTrace.action.init;

  return contractCreationBytecode;
};

/**
 *
 * @param contractCreationBytecode - contract bytecode and constructor params bytecode
 * @param logicAddress - bytecode for logic address
 * @returns - constructor params bytecode
 */
const getConstructorArgumentsBytecode = (
  contractCreationBytecode: string,
  logicAddress: string
): string => {
  const [_, initializationCalldata] = contractCreationBytecode.split(
    logicAddress
  );
  const constructorArgumentsBytecode = `${logicAddress}${initializationCalldata}`;
  return constructorArgumentsBytecode;
};

// https://docs.etherscan.io/tutorials/verifying-contracts-programmatically
type ContractParams = {
  apiKey: string;
  module: string;
  action: string;
  sourceCode: string;
  contractAddress: string;
  codeFormat: "solidity-single-file" | "solidity-standard-json-input";
  contractName: string;
  compilerVersion: string;
  optimizationUsed: 0 | 1;
  runs: number;
  constructorArguments: string;
  licenseType: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14; // https://etherscan.io/contract-license-types
};
/**
 *
 * @param {object} params contract params for etherscan
 * @returns x-www-form-urlencoded params
 */
const getParamsForEtherscan = ({
  apiKey,
  module,
  action,
  sourceCode,
  contractAddress,
  codeFormat,
  contractName,
  compilerVersion,
  optimizationUsed,
  runs,
  constructorArguments,
  licenseType,
}: ContractParams): URLSearchParams => {
  const params = new URLSearchParams();
  params.append("apikey", apiKey);
  params.append("module", module);
  params.append("action", action);
  params.append("sourceCode", sourceCode);
  params.append("contractaddress", contractAddress);
  params.append("codeformat", codeFormat);
  params.append("contractname", contractName);
  params.append("compilerversion", compilerVersion);
  params.append("optimizationused", optimizationUsed.toString());
  params.append("runs", runs.toString());
  params.append("constructorArguements", constructorArguments);
  params.append("licenseType", licenseType.toString());

  return params;
};

/**
 *
 * @param {string} collectionPartyAddress address of the collection party
 * @param {string} collectionPartyCreationTx tx of the collection party creation
 * @returns {boolean} verification request succeeded or failed. this _does not_ mean the verification passed.
 */
export const verifyCollectionParty = async (
  collectionPartyAddress: string,
  collectionPartyCreationTx: string
): Promise<boolean> => {
  const contractCreationBytecode = await getContractCreationBytecode(
    collectionPartyCreationTx
  );

  // NOTE: this must match the logic variable of the deployed CollectionPartyFactory contract https://github.com/PartyDAO/partybid/blob/main/contracts/CollectionPartyFactory.sol#L32
  const logicAddress = "0x0c696f63a8cfd4b456f725f1174f1d5b48d1e876";
  const logicAddressHexEncoded = `000000000000000000000000${logicAddress.replace(
    "0x",
    ""
  )}`;
  const constructorArgumentsBytecode = getConstructorArgumentsBytecode(
    contractCreationBytecode,
    logicAddressHexEncoded
  );

  try {
    // NOTE: these arguments must match the hardhat configuration from: https://github.com/PartyDAO/partybid/blob/main/hardhat.config.js
    const params = getParamsForEtherscan({
      apiKey: config.etherscan.apiKey,
      module: "contract",
      action: "verifysourcecode",
      sourceCode: NonReceivableInitializedProxySourceCode,
      contractAddress: collectionPartyAddress,
      codeFormat: "solidity-single-file",
      contractName: "NonReceivableInitializedProxy",
      compilerVersion: "v0.8.9+commit.e5eed63a",
      optimizationUsed: 1,
      runs: 999999,
      constructorArguments: constructorArgumentsBytecode,
      licenseType: 3, // enum for MIT
    });
    const resp = await axios.post(config.etherscan.apiBase, params);

    if (!(resp && resp.data)) {
      throw new Error(
        `Invalid response from Etherscan API for ${collectionPartyAddress}`
      );
    }
    const { data } = resp;
    console.log("etherscan:: data", data);
    if (data.status === "1" && data.result) {
      console.log(
        `verifyCollectionParty:: successfully verified collection party contract for ${collectionPartyAddress}. guid ${data.result}.`
      );
      return true;
    } else {
      throw new Error(
        `Could not verify collection party contract for ${collectionPartyAddress}`
      );
    }
  } catch (error) {
    console.error(error);
    return false;
  }
  return false;
};

/**
 * verify proxy contract on etherscan if the event is a start event
 * @param {PartyEvent} event
 * @returns true/false if verified
 */
export const verifyCollectionPartyContractForEvent = async (
  event: PartyEvent
): Promise<boolean> => {
  if (event.party.partyType !== "collection") {
    return;
  }
  // todo: check etherscan API to see if collection party source code is verified
  // and save value in redis
  const { txHash } = event;
  const { partyAddress } = event.party;
  return verifyCollectionParty(partyAddress, txHash);
};
