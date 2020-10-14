/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { MockChainlinkAggregator } from "./MockChainlinkAggregator";

export class MockChainlinkAggregatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _latestAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<MockChainlinkAggregator> {
    return super.deploy(_latestAnswer, overrides) as Promise<
      MockChainlinkAggregator
    >;
  }
  getDeployTransaction(
    _latestAnswer: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(_latestAnswer, overrides);
  }
  attach(address: string): MockChainlinkAggregator {
    return super.attach(address) as MockChainlinkAggregator;
  }
  connect(signer: Signer): MockChainlinkAggregatorFactory {
    return super.connect(signer) as MockChainlinkAggregatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockChainlinkAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockChainlinkAggregator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "_latestAnswer",
        type: "int256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516100ee3803806100ee8339818101604052602081101561003357600080fd5b5051608052608051609f61004f6000398060475250609f6000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806350d25bcd14602d575b600080fd5b60336045565b60408051918252519081900360200190f35b7f00000000000000000000000000000000000000000000000000000000000000009056fea2646970667358221220657ca6f7f01bc1c2bff9f92146d2a5ff5f5003e912b12a0f4175e3456e491bd564736f6c63430006060033";