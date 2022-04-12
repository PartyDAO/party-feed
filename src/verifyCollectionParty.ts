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
import { ethers } from "ethers";
import { config } from "./config";

// https://github.com/PartyDAO/partybid/blob/main/contracts/CollectionPartyFactory.sol#L76-L86
type InitializationCalldataArguments = {
  collectionPartyInitializeMethodSelector: string;
  nftContract: string;
  maxPrice: number;
  secondsToTimeout: number;
  deciders: string[];
  split: string;
  tokenGate: string;
  name: string;
  symbol: string;
};
const getInitializationCalldataBytecode = ({
  collectionPartyInitializeMethodSelector,
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
    collectionPartyInitializeMethodSelector,
    ethers.utils.defaultAbiCoder.encode(
      [
        "address",
        "uint256",
        "uint256",
        "address[]",
        "Structs.AddressAndAmount",
        "Structs.AddressAndAmount",
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
  constructorMethodSelector: string;
  logicAddress: string;
  initializationCalldataBytecode: string;
};
const getConstructorArgumentsBytecode = ({
  constructorMethodSelector,
  logicAddress,
  initializationCalldataBytecode,
}: ConstructorArguments): string => {
  const initializationCalldata = ethers.utils.hexConcat([
    constructorMethodSelector,
    ethers.utils.defaultAbiCoder.encode(
      ["address", "bytes"],
      [logicAddress, initializationCalldataBytecode]
    ),
  ]);
  return initializationCalldata;
};

// https://docs.etherscan.io/tutorials/verifying-contracts-programmatically
type ContractParams = {
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

const verifyCollectionParty = async (address: string): Promise<boolean> => {
  const logicAddress = "0x0c696f63a8cfd4b456f725f1174f1d5b48d1e876";
  const initializationCalldata = {
    collectionPartyInitializeMethodSelector: "",
    nftContract: "",
    maxPrice: 0,
    secondsToTimeout: 0,
    deciders: [],
    split: "",
    tokenGate: "",
    name: "",
    symbol: "",
  };
  const initializationCalldataBytecode = getInitializationCalldataBytecode(
    initializationCalldata
  );
  const constructorArgumentsBytecode = getConstructorArgumentsBytecode({
    constructorMethodSelector: "",
    logicAddress,
    initializationCalldataBytecode,
  });

  try {
    const params = getParamsForEtherscan({
      contractAddress: address,
      codeFormat: "solidity-single-file",
      contractName: "NonReceivableInitializedProxy", // .sol?
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
      throw new Error(`Invalid response from Etherscan API for ${address}`);
    }
    const { data } = resp;
    console.log("etherscan:: data", data);
    if (data.status === "1" && data.result) {
      console.log(
        `verifyCollectionParty:: successfully verified proxy contract for ${address}. guid ${data.result}.`
      );
      return true;
    } else {
      throw new Error(`Could not verify proxy contract for ${address}`);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
  return false;
};
