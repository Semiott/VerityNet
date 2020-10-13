/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { RecoveryUpgrade } from "./RecoveryUpgrade";

export class RecoveryUpgradeFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RecoveryUpgrade {
    return new Contract(address, _abi, signerOrProvider) as RecoveryUpgrade;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "manager",
        type: "address"
      }
    ],
    name: "ManagerSet",
    type: "event"
  },
  {
    inputs: [],
    name: "_manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "recover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
