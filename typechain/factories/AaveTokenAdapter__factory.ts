/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AaveTokenAdapter,
  AaveTokenAdapterInterface,
} from "../AaveTokenAdapter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlyingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "ERC20CallFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "price",
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
    name: "token",
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
    name: "underlyingToken",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maximumLoss",
        type: "uint256",
      },
    ],
    name: "unwrap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maximumLoss",
        type: "uint256",
      },
    ],
    name: "wrap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161090138038061090183398101604081905261002f9161007c565b600080546001600160a01b039384166001600160a01b031991821617909155600180549290931691161790556100af565b80516001600160a01b038116811461007757600080fd5b919050565b6000806040838503121561008f57600080fd5b61009883610060565b91506100a660208401610060565b90509250929050565b610843806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80632495a5991461005c5780633f069a431461008c578063a035b1fe146100ad578063d01ab8ee146100b5578063fc0c546a146100c8575b600080fd5b60015461006f906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61009f61009a36600461059e565b6100db565b604051908152602001610083565b61009f61017d565b61009f6100c336600461059e565b610207565b60005461006f906001600160a01b031681565b600080546100f4906001600160a01b03163330876102cd565b6000805460405163ead5d35960e01b81526001600160a01b03868116600483015260248201889052600160448301528392169063ead5d3599060640160408051808303816000875af115801561014e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061017291906105e2565b979650505050505050565b600080546001600160a01b031663f57d0b40610198826103d6565b6101a390600a610702565b6040518263ffffffff1660e01b81526004016101c191815260200190565b602060405180830381865afa1580156101de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102029190610718565b905090565b600154600090610222906001600160a01b03163330876102cd565b60015460005461023f916001600160a01b039081169116866104a7565b60008054604051632f2cab8760e01b81526001600160a01b03868116600483015260248201889052604482019390935260016064820152911690632f2cab87906084016020604051808303816000875af11580156102a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c59190610718565b949350505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916103319190610761565b6000604051808303816000865af19150503d806000811461036e576040519150601f19603f3d011682016040523d82523d6000602084013e610373565b606091505b50915091508115806103a157508051158015906103a157508080602001905181019061039f919061077d565b155b156103ce5785828260405163e7e40b5b60e01b81526004016103c59392919061079f565b60405180910390fd5b505050505050565b60408051600481526024810182526020810180516001600160e01b031663313ce56760e01b1790529051600091829182916001600160a01b0386169161041c9190610761565b600060405180830381855afa9150503d8060008114610457576040519150601f19603f3d011682016040523d82523d6000602084013e61045c565b606091505b509150915081158061046f575060208151105b156104935783828260405163e7e40b5b60e01b81526004016103c59392919061079f565b808060200190518101906102c591906107ea565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b17905291516000928392908716916105039190610761565b6000604051808303816000865af19150503d8060008114610540576040519150601f19603f3d011682016040523d82523d6000602084013e610545565b606091505b50915091508115806105735750805115801590610573575080806020019051810190610571919061077d565b155b156105975784828260405163e7e40b5b60e01b81526004016103c59392919061079f565b5050505050565b6000806000606084860312156105b357600080fd5b8335925060208401356001600160a01b03811681146105d157600080fd5b929592945050506040919091013590565b600080604083850312156105f557600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601160045260246000fd5b600181815b8085111561065757816000190482111561063d5761063d610606565b8085161561064a57918102915b93841c9390800290610621565b509250929050565b60008261066e575060016106fc565b8161067b575060006106fc565b8160018114610691576002811461069b576106b7565b60019150506106fc565b60ff8411156106ac576106ac610606565b50506001821b6106fc565b5060208310610133831016604e8410600b84101617156106da575081810a6106fc565b6106e4838361061c565b80600019048211156106f8576106f8610606565b0290505b92915050565b600061071160ff84168361065f565b9392505050565b60006020828403121561072a57600080fd5b5051919050565b60005b8381101561074c578181015183820152602001610734565b8381111561075b576000848401525b50505050565b60008251610773818460208701610731565b9190910192915050565b60006020828403121561078f57600080fd5b8151801515811461071157600080fd5b60018060a01b0384168152821515602082015260606040820152600082518060608401526107d4816080850160208701610731565b601f01601f191691909101608001949350505050565b6000602082840312156107fc57600080fd5b815160ff8116811461071157600080fdfea2646970667358221220cf796f7e4797494b623e567503d6ba9b6174ef2a8600bf7a319cde1db2f99b7064736f6c634300080b0033";

export class AaveTokenAdapter__factory extends ContractFactory {
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
    _token: string,
    _underlyingToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AaveTokenAdapter> {
    return super.deploy(
      _token,
      _underlyingToken,
      overrides || {}
    ) as Promise<AaveTokenAdapter>;
  }
  getDeployTransaction(
    _token: string,
    _underlyingToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _token,
      _underlyingToken,
      overrides || {}
    );
  }
  attach(address: string): AaveTokenAdapter {
    return super.attach(address) as AaveTokenAdapter;
  }
  connect(signer: Signer): AaveTokenAdapter__factory {
    return super.connect(signer) as AaveTokenAdapter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveTokenAdapterInterface {
    return new utils.Interface(_abi) as AaveTokenAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveTokenAdapter {
    return new Contract(address, _abi, signerOrProvider) as AaveTokenAdapter;
  }
}
