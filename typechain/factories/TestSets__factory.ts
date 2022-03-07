/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestSets, TestSetsInterface } from "../TestSets";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "contains",
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
    inputs: [
      {
        internalType: "address",
        name: "val",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103f4806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630a3b0a4f1461004657806329092d0e1461005b5780635dbe47e81461006e575b600080fd5b610059610054366004610306565b610095565b005b610059610069366004610306565b6100e4565b61008161007c366004610306565b61012e565b604051901515815260200160405180910390f35b6100a0600082610140565b6100e15760405162461bcd60e51b815260206004820152600d60248201526c19985a5b1959081d1bc8185919609a1b60448201526064015b60405180910390fd5b50565b6100ef6000826101a1565b6100e15760405162461bcd60e51b815260206004820152601060248201526f6661696c656420746f2072656d6f766560801b60448201526064016100d8565b600061013a81836102e5565b92915050565b600061014c83836102e5565b156101595750600061013a565b508154600180820184556000848152602080822090930180546001600160a01b0319166001600160a01b03959095169485179055845493815293810190915260409092205590565b6001600160a01b0381166000908152600183016020526040812054806101cb57600091505061013a565b806101d58161034c565b8554909250600091506101ea90600190610363565b905080821461028a57600085600001828154811061020a5761020a61037a565b60009182526020909120015486546001600160a01b03909116915081908790859081106102395761023961037a565b600091825260209091200180546001600160a01b0319166001600160a01b039290921691909117905561026d836001610390565b6001600160a01b0390911660009081526001870160205260409020555b845485908061029b5761029b6103a8565b60008281526020808220600019908401810180546001600160a01b03191690559092019092556001600160a01b039590951681526001958601909452505060408220919091555090565b6001600160a01b031660009081526001919091016020526040902054151590565b60006020828403121561031857600080fd5b81356001600160a01b038116811461032f57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b60008161035b5761035b610336565b506000190190565b60008282101561037557610375610336565b500390565b634e487b7160e01b600052603260045260246000fd5b600082198211156103a3576103a3610336565b500190565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220748e00165760f9ae078e511df0f7684a6b8e795c52990c5f4674f7631b4bba2164736f6c634300080b0033";

export class TestSets__factory extends ContractFactory {
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
  ): Promise<TestSets> {
    return super.deploy(overrides || {}) as Promise<TestSets>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestSets {
    return super.attach(address) as TestSets;
  }
  connect(signer: Signer): TestSets__factory {
    return super.connect(signer) as TestSets__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestSetsInterface {
    return new utils.Interface(_abi) as TestSetsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestSets {
    return new Contract(address, _abi, signerOrProvider) as TestSets;
  }
}
