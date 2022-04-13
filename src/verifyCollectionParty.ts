// Verifying CollectionParty NonReceivableInitializedProxy contracts
//
// 1. log listener for all CollectionPartyDeployed events from CollectionPartyFactory (0xd084d7849d4ebe564a2a41e085b2a74f6dde5300)
//   emit CollectionPartyDeployed(
//     partyProxy,
//     msg.sender,
//     _nftContract,
//     _maxPrice,
//     _secondsToTimeout,
//     _deciders,
//     _split.addr,
//     _split.amount,
//     _tokenGate.addr,
//     _tokenGate.amount,
//     _name,
//     _symbol
//   );
// 2. loop through each CollectionPartyDeployed events
// 3. hardcode CollectionParty logic address 0x0c696f63a8cfd4b456f725f1174f1d5b48d1e876
// 4. reconstruct _initializationCalldata (https://github.com/PartyDAO/partybid/blob/main/contracts/CollectionPartyFactory.sol#L76-L86) from CollectionPartyDeployed event data
//   bytes memory _initializationCalldata = abi.encodeWithSelector(
//     CollectionParty.initialize.selector,
//     _nftContract,
//     _maxPrice,
//     _secondsToTimeout,
//     _deciders,
//     _split,
//     _tokenGate,
//     _name,
//     _symbol
//   );
// 5. call Etherscan API https://docs.etherscan.io/tutorials/verifying-contracts-programmatically
//   contractaddress: partyProxy (from CollectionPartyDeployed event data)
//   codeformat: "solidity-single-file"
//   contractname: NonReceivableInitializedProxy
//   compilerversion: "v0.8.9+commit.e5eed63a"
//   optimizationUsed: 1
//   runs: 999999
//   constructorArguments: abi encoded (logic, _initializationCalldata)
//   licenseType: 3 (3 stands for MIT https://etherscan.io/contract-license-types)

import axios from "axios";
import { config } from "./config";

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

const getConstructorArgumentsBytecode = (
  contractCreationBytecode: string,
  logicAddress: string
): string => {
  const [_, initializationCalldata] = contractCreationBytecode.split(
    logicAddress
  );
  const constructorArgumentsBytecode = `0x${logicAddress}${initializationCalldata}`;
  return constructorArgumentsBytecode;
};

// https://docs.etherscan.io/tutorials/verifying-contracts-programmatically
type ContractParams = {
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
const getParamsForEtherscan = ({
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
  params.append("sourcecode", sourceCode);
  params.append("contractaddress", contractAddress);
  params.append("codeformat", codeFormat);
  params.append("contractname", contractName);
  params.append("compilerversion", compilerVersion);
  params.append("optimizationused", optimizationUsed.toString());
  params.append("runs", runs.toString());
  params.append("constructorArguments", constructorArguments);
  params.append("licenseType", licenseType.toString());

  return params;
};

export const verifyCollectionParty = async (
  collectionPartyAddress: string,
  collectionPartyCreationTx: string
): Promise<boolean> => {
  const contractCreationBytecode = await getContractCreationBytecode(
    collectionPartyCreationTx
  );

  // const logicAddress = "0x0c696f63a8cfd4b456f725f1174f1d5b48d1e876";
  const logicAddress =
    "0000000000000000000000000c696f63a8cfd4b456f725f1174f1d5b48d1e876";
  const constructorArgumentsBytecode = getConstructorArgumentsBytecode(
    contractCreationBytecode,
    logicAddress
  );
  console.log("constructorArgumentsBytecode", constructorArgumentsBytecode);

  try {
    const params = getParamsForEtherscan({
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
    const resp = await axios.post(
      `${config.etherscan.apiBase}/?module=contract&action=verifysourcecode&apikey=${config.etherscan.apiKey}`,
      params
    );

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

const NonReceivableInitializedProxySourceCode = `// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

/**
 * @title NonReceivableInitializedProxy
 * @author Anna Carroll
 */
contract NonReceivableInitializedProxy {
    // address of logic contract
    address public immutable logic;

    // ======== Constructor =========

    constructor(address _logic, bytes memory _initializationCalldata) {
        logic = _logic;
        // Delegatecall into the logic contract, supplying initialization calldata
        (bool _ok, bytes memory returnData) = _logic.delegatecall(
            _initializationCalldata
        );
        // Revert if delegatecall to implementation reverts
        require(_ok, string(returnData));
    }

    // ======== Fallback =========

    fallback() external payable {
        address _impl = logic;
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            let result := delegatecall(gas(), _impl, ptr, calldatasize(), 0, 0)
            let size := returndatasize()
            returndatacopy(ptr, 0, size)

            switch result
            case 0 {
                revert(ptr, size)
            }
            default {
                return(ptr, size)
            }
        }
    }
}`;
