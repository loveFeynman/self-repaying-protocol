/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Owned, OwnedInterface } from "../Owned";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldOwner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerNominated",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "nominateNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nominatedOwner",
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
    name: "owner",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506109d0806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631627540c1461005157806353a47bb71461006d57806379ba50971461008b5780638da5cb5b14610095575b600080fd5b61006b600480360381019061006691906107e5565b6100b3565b005b6100756103a0565b6040516100829190610821565b60405180910390f35b6100936103c6565b005b61009d61075b565b6040516100aa9190610821565b60405180910390f35b6100df7fb0004a0774e2eedb0551687396ec41f12f275992cd91a30eab508d16933ac7d960001b61077f565b61010b7f045b390fa5644c07a3c2deaef11aa8e4ffe3e933336eb32ef5942f7017ccc24860001b61077f565b6101377fa6556719abd0ee47b66224ab09f7348f058e038847def6096323c59cc11ae99f60001b61077f565b6101637f8e07f196ffb04fde2488ca5c75e064bf751a5fa2173ef23ad52d10bb57ba10b960001b61077f565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101e8906108bf565b60405180910390fd5b61021d7fedf95376bb9b31d2a824fdccfd035d5528fa542d71694c3a0a928f565c8289e160001b61077f565b6102497f2989e345f3453d4e6dbfb97d0608f5b6c314103c624a47530599ee83d37083d960001b61077f565b6102757f69b556e61ce4104896683e11e3e3a6ef8436117110ef7010f160b0f3ece5f1d260001b61077f565b6102a17f0bef20fbf36f1f3fcd37b4f99c5ac4d0322837bbea3aa4971d3c3133f2f475d560001b61077f565b6102cd7fda9c21fca1dc95c8bcbf1c47976c82b4049f9ad3f332c86e08776459220b807060001b61077f565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061033a7fc69d4fb5b18645558cbee508c3222cdc7acde1964af18c113182472b1bd5d9c560001b61077f565b6103667fbc7d36a5ba7c96e25da734db25dbe216d64ddfb8a08294b495cc2e7f0024d2f260001b61077f565b7f906a1c6bd7e3091ea86693dd029a831c19049ce77f1dce2ce0bab1cacbabce22816040516103959190610821565b60405180910390a150565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6103f27f438fe40501853e713c4deee648052350b85f546621796e45bd077708079c44e760001b61077f565b61041e7fef138dd50f9efc76dee0b42ed3eda7d5c4a40e33cb43cf08c38fa73ba041546560001b61077f565b61044a7f2294d23627eaf92f1f725f9b6eca4c9e1b8cfbbf1a784bde9f02e75fec6efd5260001b61077f565b6104767f6752c53cf28ff1b29d104441c441aca80f1e60ce2ac1882a76cde004ddc0d39860001b61077f565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610506576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104fd90610951565b60405180910390fd5b6105327ff8882a1ec5aa5be7acd4eaa6b55b1c5739b4374c350c60f7b3db7f3e3de29fe660001b61077f565b61055e7fa7b94448f7b834bf4bf8a6723d30c2f5c1dca7c25aa8f7f937eb9705ba3603f360001b61077f565b61058a7f0369e4861ca24b186323a9e9f4ab0ba8ee1f81ced42c7593f50921541973ac9b60001b61077f565b7fb532073b38c83145e3e5135377a08bf9aab55bc0fd7c1179cd4fb995d2a5159c60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040516105fd929190610971565b60405180910390a16106317fbc1802c5fb11442b1ef4db36be210e32686f7cfda03f62990b03ee42fe6e5f5560001b61077f565b61065d7f618c79c535cd323424fb7fb09d26000512611ed810889d88005f0a78652f619c60001b61077f565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506106eb7f684f02842ffe1ad41962d79eaee62328dbf99117bb4e441506ebfc729bfcc7a560001b61077f565b6107177fd2b0ecc93da8e850a4a0b36ffeda335d1354c7fd21642e6df99c13ae8da5d27560001b61077f565b6000600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107b282610787565b9050919050565b6107c2816107a7565b81146107cd57600080fd5b50565b6000813590506107df816107b9565b92915050565b6000602082840312156107fb576107fa610782565b5b6000610809848285016107d0565b91505092915050565b61081b816107a7565b82525050565b60006020820190506108366000830184610812565b92915050565b600082825260208201905092915050565b7f4f6e6c792074686520636f6e7472616374206f776e6572206d6179207065726660008201527f6f726d207468697320616374696f6e0000000000000000000000000000000000602082015250565b60006108a9602f8361083c565b91506108b48261084d565b604082019050919050565b600060208201905081810360008301526108d88161089c565b9050919050565b7f596f75206d757374206265206e6f6d696e61746564206265666f726520796f7560008201527f2063616e20616363657074206f776e6572736869700000000000000000000000602082015250565b600061093b60358361083c565b9150610946826108df565b604082019050919050565b6000602082019050818103600083015261096a8161092e565b9050919050565b60006040820190506109866000830185610812565b6109936020830184610812565b939250505056fea2646970667358221220a5bfd9e60eade4da8cab285880d00125a55eb01f398d042e014ebfaaeeec0f7764736f6c634300080b0033";

export class Owned__factory extends ContractFactory {
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
  ): Promise<Owned> {
    return super.deploy(overrides || {}) as Promise<Owned>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Owned {
    return super.attach(address) as Owned;
  }
  connect(signer: Signer): Owned__factory {
    return super.connect(signer) as Owned__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnedInterface {
    return new utils.Interface(_abi) as OwnedInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Owned {
    return new Contract(address, _abi, signerOrProvider) as Owned;
  }
}