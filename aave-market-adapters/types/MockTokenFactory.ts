/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";

import { TransactionOverrides } from ".";
import { MockToken } from "./MockToken";

export class MockTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<MockToken> {
    return super.deploy(name, symbol, decimals, overrides) as Promise<
      MockToken
    >;
  }
  getDeployTransaction(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: TransactionOverrides
  ): UnsignedTransaction {
    return super.getDeployTransaction(name, symbol, decimals, overrides);
  }
  attach(address: string): MockToken {
    return super.attach(address) as MockToken;
  }
  connect(signer: Signer): MockTokenFactory {
    return super.connect(signer) as MockTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockToken {
    return new Contract(address, _abi, signerOrProvider) as MockToken;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256"
      }
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256"
      }
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200115038038062001150833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604052602090810151855190935085925084918491620001c09160039190860190620001f7565b508151620001d6906004906020850190620001f7565b506005805460ff191660ff92909216919091179055506200029c9350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200023a57805160ff19168380011785556200026a565b828001600101855582156200026a579182015b828111156200026a5782518255916020019190600101906200024d565b50620002789291506200027c565b5090565b6200029991905b8082111562000278576000815560010162000283565b90565b610ea480620002ac6000396000f3fe6080604052600436106100e15760003560e01c806370a082311161007f578063a0712d6811610059578063a0712d681461033f578063a457c2d714610369578063a9059cbb146103a2578063dd62ed3e146103db576100e8565b806370a08231146102be57806379cc6790146102f157806395d89b411461032a576100e8565b806323b872dd116100bb57806323b872dd146101eb578063313ce5671461022e578063395093511461025957806342966c6814610292576100e8565b806306fdde03146100ed578063095ea7b31461017757806318160ddd146101c4576100e8565b366100e857005b600080fd5b3480156100f957600080fd5b50610102610416565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013c578181015183820152602001610124565b50505050905090810190601f1680156101695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561018357600080fd5b506101b06004803603604081101561019a57600080fd5b506001600160a01b0381351690602001356104ac565b604080519115158252519081900360200190f35b3480156101d057600080fd5b506101d96104c9565b60408051918252519081900360200190f35b3480156101f757600080fd5b506101b06004803603606081101561020e57600080fd5b506001600160a01b038135811691602081013590911690604001356104cf565b34801561023a57600080fd5b5061024361055c565b6040805160ff9092168252519081900360200190f35b34801561026557600080fd5b506101b06004803603604081101561027c57600080fd5b506001600160a01b038135169060200135610565565b34801561029e57600080fd5b506102bc600480360360208110156102b557600080fd5b50356105b9565b005b3480156102ca57600080fd5b506101d9600480360360208110156102e157600080fd5b50356001600160a01b03166105cd565b3480156102fd57600080fd5b506102bc6004803603604081101561031457600080fd5b506001600160a01b0381351690602001356105e8565b34801561033657600080fd5b506101026105f6565b34801561034b57600080fd5b506101b06004803603602081101561036257600080fd5b5035610657565b34801561037557600080fd5b506101b06004803603604081101561038c57600080fd5b506001600160a01b03813516906020013561066b565b3480156103ae57600080fd5b506101b0600480360360408110156103c557600080fd5b506001600160a01b0381351690602001356106d9565b3480156103e757600080fd5b506101d9600480360360408110156103fe57600080fd5b506001600160a01b03813581169160200135166106ed565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104a25780601f10610477576101008083540402835291602001916104a2565b820191906000526020600020905b81548152906001019060200180831161048557829003601f168201915b5050505050905090565b60006104c06104b9610718565b848461071c565b50600192915050565b60025490565b60006104dc848484610808565b610552846104e8610718565b61054d85604051806060016040528060288152602001610d94602891396001600160a01b038a16600090815260016020526040812090610526610718565b6001600160a01b03168152602081019190915260400160002054919063ffffffff61096f16565b61071c565b5060019392505050565b60055460ff1690565b60006104c0610572610718565b8461054d8560016000610583610718565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549063ffffffff610a0616565b6105ca6105c4610718565b82610a67565b50565b6001600160a01b031660009081526020819052604090205490565b6105f28282610b6f565b5050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104a25780601f10610477576101008083540402835291602001916104a2565b60006106633383610bc3565b506001919050565b60006104c0610678610718565b8461054d85604051806060016040528060258152602001610e4a60259139600160006106a2610718565b6001600160a01b03908116825260208083019390935260409182016000908120918d1681529252902054919063ffffffff61096f16565b60006104c06106e6610718565b8484610808565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b3390565b6001600160a01b0383166107615760405162461bcd60e51b8152600401808060200182810382526024815260200180610e266024913960400191505060405180910390fd5b6001600160a01b0382166107a65760405162461bcd60e51b8152600401808060200182810382526022815260200180610d4c6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b03831661084d5760405162461bcd60e51b8152600401808060200182810382526025815260200180610e016025913960400191505060405180910390fd5b6001600160a01b0382166108925760405162461bcd60e51b8152600401808060200182810382526023815260200180610d076023913960400191505060405180910390fd5b61089d838383610cbf565b6108e081604051806060016040528060268152602001610d6e602691396001600160a01b038616600090815260208190526040902054919063ffffffff61096f16565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610915908263ffffffff610a0616565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600081848411156109fe5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156109c35781810151838201526020016109ab565b50505050905090810190601f1680156109f05780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015610a60576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001600160a01b038216610aac5760405162461bcd60e51b8152600401808060200182810382526021815260200180610de06021913960400191505060405180910390fd5b610ab882600083610cbf565b610afb81604051806060016040528060228152602001610d2a602291396001600160a01b038516600090815260208190526040902054919063ffffffff61096f16565b6001600160a01b038316600090815260208190526040902055600254610b27908263ffffffff610cc416565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b610b798282610a67565b6105f282610b85610718565b61054d84604051806060016040528060248152602001610dbc602491396001600160a01b038816600090815260016020526040812090610526610718565b6001600160a01b038216610c1e576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b610c2a60008383610cbf565b600254610c3d908263ffffffff610a0616565b6002556001600160a01b038216600090815260208190526040902054610c69908263ffffffff610a0616565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000610a6083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061096f56fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220777d2f5fb00127851f0d17ba906a51df07df199c7e283f5aa745572a95e25de564736f6c63430006060033";
