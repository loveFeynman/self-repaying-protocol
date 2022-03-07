/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ContractWhitelisterTest,
  ContractWhitelisterTestInterface,
} from "../ContractWhitelisterTest";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "NotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "UnauthorizedER",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AccountAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AccountRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "WhitelistDisabled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "WhitelistEnabled",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addToWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "disableWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enableWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeFromWhitelist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "whitelist",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "whitelistActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102cb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806302ce5813146100675780638ab1d681146100885780639b19251a1461009d578063cdfb2b4e146100c0578063d6b0f484146100c8578063e43252d7146100d0575b600080fd5b6000546100749060ff1681565b604051901515815260200160405180910390f35b61009b610096366004610265565b6100e3565b005b6100746100ab366004610265565b60016020526000908152604090205460ff1681565b61009b610143565b61009b610181565b61009b6100de366004610265565b6101bc565b6100eb610219565b6001600160a01b038116600081815260016020908152604091829020805460ff1916905590519182527fbf2e373b8263f701e10efcac80ea442afcb29c6852b3a42b0b46cc8edaaf54a791015b60405180910390a150565b61014b610219565b6000805460ff191660011781556040517fe5e5846f783279948f6ec5faad38318cde86fe5be7ea845ede56d62f16c374349190a1565b610189610219565b6000805460ff191681556040517f212c6e1d3045c9581ef0adf2504dbb1d137f52f38162ccf77a16c69d14eba5c39190a1565b6101c4610219565b6001600160a01b038116600081815260016020818152604092839020805460ff191690921790915590519182527f8f42195a0bbfa58954be4349deb9efc38bdb9c298e529f705f8bc1e38bce03999101610138565b60405162461bcd60e51b815260206004820152601b60248201527f6f76657272696465206f6e6c7941646d696e206d6f6469666965720000000000604482015260640160405180910390fd5b60006020828403121561027757600080fd5b81356001600160a01b038116811461028e57600080fd5b939250505056fea2646970667358221220b4b8b1e2360e50e8d8165d2603ce5935c2694803c3c86574745bbd67b0c0c33464736f6c63430008090033";

export class ContractWhitelisterTest__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractWhitelisterTest> {
    return super.deploy(overrides || {}) as Promise<ContractWhitelisterTest>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ContractWhitelisterTest {
    return super.attach(address) as ContractWhitelisterTest;
  }
  connect(signer: Signer): ContractWhitelisterTest__factory {
    return super.connect(signer) as ContractWhitelisterTest__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ContractWhitelisterTestInterface {
    return new utils.Interface(_abi) as ContractWhitelisterTestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContractWhitelisterTest {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ContractWhitelisterTest;
  }
}
