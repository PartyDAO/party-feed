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
import { BigNumber, ethers } from "ethers";
import { config } from "./config";

// const getCollectionPartyDeployedLog = async (
//   collectionPartyAddress: string
// ): Promise<{
//   nftContract: string;
//   maxPrice: number;
//   secondsToTimeout: number;
//   deciders: string[];
//   splitRecipient: string;
//   splitBasisPoints: number;
//   gatedToken: string;
//   gatedTokenAmount: number;
//   name: string;
//   symbol: string;
// }> => {
//   // index_topic_1 address partyProxy
//   // index_topic_2 address creator
//   // index_topic_3 address nftContract
//   // uint256 maxPrice
//   // uint256 secondsToTimeout
//   // address[] deciders
//   // address splitRecipient
//   // uint256 splitBasisPoints
//   // address gatedToken
//   // uint256 gatedTokenAmount
//   // string name
//   // string symbol
//   return {};
// };

// https://github.com/PartyDAO/partybid/blob/main/contracts/CollectionPartyFactory.sol#L76-L86
type InitializationCalldataArguments = {
  nftContract: string;
  maxPrice: BigNumber;
  secondsToTimeout: number;
  deciders: string[];
  split: (string | number)[];
  tokenGate: (string | number)[];
  name: string;
  symbol: string;
};
const getInitializationCalldataBytecode = ({
  nftContract,
  maxPrice,
  secondsToTimeout,
  deciders,
  split,
  tokenGate,
  name,
  symbol,
}: InitializationCalldataArguments): string => {
  const initializationCalldata = ethers.utils.hexConcat([
    ethers.utils.id(
      "initialize(address,uint256,uint256,address[],tuple(address,uint256),tuple(address,uint256),string,string))"
    ),
    ethers.utils.defaultAbiCoder.encode(
      [
        "address",
        "uint256",
        "uint256",
        "address[]",
        "tuple(address,uint256)",
        "tuple(address,uint256)",
        "string",
        "string",
      ],
      [
        nftContract,
        maxPrice,
        secondsToTimeout,
        deciders,
        split,
        tokenGate,
        name,
        symbol,
      ]
    ),
  ]);
  return initializationCalldata;
};

type ConstructorArguments = {
  logicAddress: string;
  initializationCalldataBytecode: string;
};
const getConstructorArgumentsBytecode = ({
  logicAddress,
  initializationCalldataBytecode,
}: ConstructorArguments): string => {
  console.log("id", ethers.utils.id("(address,bytes)"));
  const initializationCalldata = ethers.utils.hexConcat([
    ethers.utils.id("constructor(address,bytes)"),
    ethers.utils.defaultAbiCoder.encode(
      ["address", "bytes"],
      [logicAddress, initializationCalldataBytecode]
    ),
  ]);
  return initializationCalldata;
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
  params.append("optimizationUsed", optimizationUsed.toString());
  params.append("runs", runs.toString());
  params.append("constructorArguments", constructorArguments);
  params.append("licenseType", licenseType.toString());

  return params;
};

export const verifyCollectionParty = async (
  collectionPartyAddress: string
): Promise<boolean> => {
  const logicAddress = "0x0c696f63a8cfd4b456f725f1174f1d5b48d1e876";
  // const collectionPartyDeployedLog = await getCollectionPartyDeployedLog(
  //   collectionPartyAddress
  // );
  const initializationCalldata = {
    nftContract: "0x1e988ba4692e52bc50b375bcc8585b95c48aad77",
    maxPrice: ethers.BigNumber.from("1000000000000000000000000000"),
    secondsToTimeout: 2592000,
    deciders: ["0xc247a2a860ec45854f2c697f42db41840df8962e"],
    split: ["0x0000000000000000000000000000000000000000", 0],
    tokenGate: ["0x0000000000000000000000000000000000000000", 0],
    name: "Bufficorn",
    symbol: "SWAG",
  };
  const initializationCalldataBytecode = getInitializationCalldataBytecode(
    initializationCalldata
  );
  console.log("initialzationCalldataBytecode", initializationCalldataBytecode);

  const constructorArgumentsBytecode = getConstructorArgumentsBytecode({
    logicAddress,
    initializationCalldataBytecode,
  });

  console.log("constructorArgumentsBytecode", constructorArgumentsBytecode);

  return;

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

const NonReceivableInitializedProxySourceCode = `
// SPDX-License-Identifier: MIT
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
