/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { PartyBidFactoryV2 } from "../PartyBidFactoryV2";

export class PartyBidFactoryV2__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PartyBidFactoryV2 {
    return new Contract(address, _abi, signerOrProvider) as PartyBidFactoryV2;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_partyDAOMultisig",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenVaultFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_logicMarketWrapper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_logicNftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_logicTokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_logicAuctionId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "partyBidProxy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "nftContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "marketWrapper",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "auctionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "splitRecipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "splitBasisPoints",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "PartyBidDeployed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "deployedAt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "logic",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "partyDAOMultisig",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_marketWrapper",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nftContract",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_splitRecipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_splitBasisPoints",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    name: "startParty",
    outputs: [
      {
        internalType: "address",
        name: "partyBidProxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tokenVaultFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "weth",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
