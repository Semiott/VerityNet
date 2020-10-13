/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { TokenEthCPMPriceProvider } from "./TokenEthCPMPriceProvider";

export class TokenEthCPMPriceProviderFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _token: string,
    _cpm: string,
    _cpmPriceProvider: string,
    _fallbackOracle: string,
    overrides?: TransactionOverrides
  ): Promise<TokenEthCPMPriceProvider> {
    return super.deploy(
      _token,
      _cpm,
      _cpmPriceProvider,
      _fallbackOracle,
      overrides
    ) as Promise<TokenEthCPMPriceProvider>;
  }
  getDeployTransaction(
    _token: string,
    _cpm: string,
    _cpmPriceProvider: string,
    _fallbackOracle: string,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(
      _token,
      _cpm,
      _cpmPriceProvider,
      _fallbackOracle,
      overrides
    );
  }
  attach(address: string): TokenEthCPMPriceProvider {
    return super.attach(address) as TokenEthCPMPriceProvider;
  }
  connect(signer: Signer): TokenEthCPMPriceProviderFactory {
    return super.connect(signer) as TokenEthCPMPriceProviderFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenEthCPMPriceProvider {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenEthCPMPriceProvider;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "_cpm",
        type: "address"
      },
      {
        internalType: "contract ILatestAnswerGetter",
        name: "_cpmPriceProvider",
        type: "address"
      },
      {
        internalType: "contract IPriceOracleGetter",
        name: "_fallbackOracle",
        type: "address"
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
  "0x61010060405234801561001157600080fd5b506040516105943803806105948339818101604052608081101561003457600080fd5b508051602082015160408301516060938401516001600160601b031993851b841660805291841b831660a052831b821660c05290911b1660e05260805160601c60a05160601c60c05160601c60e05160601c6104dd6100b7600039806102395250806101ba525080606252806101285250806095528061026852506104dd6000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806350d25bcd14610030575b600080fd5b61003861004a565b60408051918252519081900360200190f35b604080516370a0823160e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116600483018190529251600093319284927f000000000000000000000000000000000000000000000000000000000000000016916370a0823191602480820192602092909190829003018186803b1580156100dc57600080fd5b505afa1580156100f0573d6000803e3d6000fd5b505050506040513d602081101561010657600080fd5b5051604080516318160ddd60e01b815290519192506000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916318160ddd916004808301926020929190829003018186803b15801561016e57600080fd5b505afa158015610182573d6000803e3d6000fd5b505050506040513d602081101561019857600080fd5b5051604080516350d25bcd60e01b815290519192506000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916350d25bcd916004808301926020929190829003018186803b15801561020057600080fd5b505afa158015610214573d6000803e3d6000fd5b505050506040513d602081101561022a57600080fd5b5051905060008082136102fe577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b3596f077f00000000000000000000000000000000000000000000000000000000000000006040518263ffffffff1660e01b815260040180826001600160a01b03166001600160a01b0316815260200191505060206040518083038186803b1580156102cd57600080fd5b505afa1580156102e1573d6000803e3d6000fd5b505050506040513d60208110156102f757600080fd5b5051610300565b815b905061033b83610316868463ffffffff61034516565b61032e88670de0b6b3a764000063ffffffff61034516565b019063ffffffff6103a716565b9550505050505090565b600082610354575060006103a1565b8282028284828161036157fe5b041461039e5760405162461bcd60e51b81526004018080602001828103825260218152602001806104876021913960400191505060405180910390fd5b90505b92915050565b600061039e83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250600081836104705760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561043557818101518382015260200161041d565b50505050905090810190601f1680156104625780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161047c57fe5b049594505050505056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a264697066735822122000413f6e7d111fbc98a1412eb9d8d7f87dabe0e6d236dd5826b7b6421e5c639d64736f6c63430006060033";
