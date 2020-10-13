/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from "ethers";
import { Provider } from "ethers/providers";

import { ITransferResolver } from "./ITransferResolver";

export class ITransferResolverFactory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITransferResolver {
    return new Contract(address, _abi, signerOrProvider) as ITransferResolver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "resolve",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
