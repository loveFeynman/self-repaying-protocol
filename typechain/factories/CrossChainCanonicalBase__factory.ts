/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CrossChainCanonicalBase,
  CrossChainCanonicalBaseInterface,
} from "../CrossChainCanonicalBase";

const _abi = [
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
    name: "IllegalArgument",
    type: "error",
  },
  {
    inputs: [],
    name: "IllegalState",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
    ],
    name: "BridgeTokenAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "state",
        type: "bool",
      },
    ],
    name: "BridgeTokenToggled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bridgeToCanonical",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "canonicalToOld",
        type: "uint256",
      },
    ],
    name: "SwapFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
    ],
    name: "addBridgeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "allBridgeTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bridgeTokenEnabled",
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
        name: "",
        type: "address",
      },
    ],
    name: "bridgeTokens",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bridgeTokensArray",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "exchangeCanonicalForOld",
    outputs: [
      {
        internalType: "uint256",
        name: "bridgeTokensOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "exchangeOldForCanonical",
    outputs: [
      {
        internalType: "uint256",
        name: "canonicalTokensOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangesPaused",
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
        name: "",
        type: "address",
      },
    ],
    name: "feeExempt",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_bridgeToCanonical",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_canonicalToOld",
        type: "uint256",
      },
    ],
    name: "setSwapFees",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "swapFees",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "bridgeTokenAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "toggleBridgeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "toggleExchanges",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "targetAddress",
        type: "address",
      },
    ],
    name: "toggleFeesForAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611fd1806100206000396000f3fe608060405234801561001057600080fd5b50600436106101805760003560e01c806305a7fc611461018557806306fdde03146101a85780630919a951146101bd578063095ea7b3146101d257806313489515146101e557806318160ddd146101f857806323b872dd1461020a578063248756d91461021d578063280cf3ed14610248578063313ce5671461025b5780633644e5151461026a5780633864376b146102725780633950935114610285578063398daa8514610298578063459d0df0146102bc5780636d1ac36a146102cf57806370a08231146102f3578063715018a61461031c5780637601f069146103245780637ecebe001461032c5780638980f11f1461033f5780638da5cb5b146103525780639006a50f1461035a57806395d89b411461036d578063a457c2d714610375578063a7c571fe14610388578063a9059cbb1461039b578063bf15c224146103ae578063cd4839ca146103d2578063d505accf146103e7578063dd62ed3e146103fa578063f2fde38b14610433575b600080fd5b610134546101939060ff1681565b60405190151581526020015b60405180910390f35b6101b0610446565b60405161019f9190611b64565b6101d06101cb366004611b9a565b6104d8565b005b6101936101e0366004611bb5565b61053a565b6101d06101f3366004611b9a565b610550565b6035545b60405190815260200161019f565b610193610218366004611bdf565b610683565b61023061022b366004611c1b565b61072d565b6040516001600160a01b03909116815260200161019f565b6101fc610256366004611bb5565b610758565b6040516012815260200161019f565b6101fc610891565b6101d0610280366004611c42565b6108a0565b610193610293366004611bb5565b61092f565b6101936102a6366004611b9a565b6101316020526000908152604090205460ff1681565b6101fc6102ca366004611bb5565b61096b565b6101936102dd366004611b9a565b6101336020526000908152604090205460ff1681565b6101fc610301366004611b9a565b6001600160a01b031660009081526033602052604090205490565b6101d0610991565b6101d06109cc565b6101fc61033a366004611b9a565b610a10565b6101d061034d366004611bb5565b610a30565b610230610ad3565b6101fc610368366004611bb5565b610ae2565b6101b0610c0d565b610193610383366004611bb5565b610c1c565b6101d0610396366004611c79565b610cb5565b6101936103a9366004611bb5565b610d66565b6101936103bc366004611b9a565b6101356020526000908152604090205460ff1681565b6103da610d73565b60405161019f9190611cac565b6101d06103f5366004611cf9565b610dd5565b6101fc610408366004611d6c565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101d0610441366004611b9a565b610f1b565b60606036805461045590611d9f565b80601f016020809104026020016040519081016040528092919081815260200182805461048190611d9f565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b5050505050905090565b336104e1610ad3565b6001600160a01b0316146105105760405162461bcd60e51b815260040161050790611dd4565b60405180910390fd5b6001600160a01b0316600090815261013160205260409020805460ff19811660ff90911615179055565b6000610547338484610fbb565b50600192915050565b33610559610ad3565b6001600160a01b03161461057f5760405162461bcd60e51b815260040161050790611dd4565b60005b610132548110156105f157816001600160a01b031661013282815481106105ab576105ab611e09565b6000918252602090912001546001600160a01b031614156105df57604051634a613c4160e01b815260040160405180910390fd5b806105e981611e35565b915050610582565b50610132805460018082019092557fc53bdfd4aa1ab65dfdaf681ca6bda958ae4a123d4ed68c4277796592280e78350180546001600160a01b0319166001600160a01b03841690811790915560008181526101356020526040808220805460ff1916909417909355915190917fa1f77cf0208e08e61710338f5370c9eba737ddc758d9f317dc5bdcff348e6e1a91a250565b60006106908484846110e0565b6001600160a01b0384166000908152603460209081526040808320338452909152902054828110156107155760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b6064820152608401610507565b6107228533858403610fbb565b506001949350505050565b610132818154811061073e57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000600260cc54141561077d5760405162461bcd60e51b815260040161050790611e50565b600260cc556001600160a01b03831660009081526101356020526040902054839060ff166107be57604051634a613c4160e01b815260040160405180910390fd5b6101345460ff16156107e357604051634a613c4160e01b815260040160405180910390fd5b6001600160a01b0384166000908152610135602052604090205460ff1661081d57604051634a613c4160e01b815260040160405180910390fd5b610827338461129e565b829150610833336113d2565b61087a576001600160a01b038416600090815261013060205260409020620f424090600101546108639084611e87565b61086d9190611ea6565b6108779083611ec8565b91505b6108858433846113f1565b50600160cc5592915050565b600061089b6114e8565b905090565b336108a9610ad3565b6001600160a01b0316146108cf5760405162461bcd60e51b815260040161050790611dd4565b6001600160a01b03821660008181526101356020908152604091829020805460ff191685151590811790915591519182527ff7c93079dcbf699749d66345a351afab7d24219bb1d915c9f4fc4cf03f00d397910160405180910390a25050565b3360008181526034602090815260408083206001600160a01b03871684529091528120549091610547918590610966908690611edf565b610fbb565b610130602052816000526040600020816002811061098857600080fd5b01549150829050565b3361099a610ad3565b6001600160a01b0316146109c05760405162461bcd60e51b815260040161050790611dd4565b6109ca6000611563565b565b336109d5610ad3565b6001600160a01b0316146109fb5760405162461bcd60e51b815260040161050790611dd4565b610134805460ff19811660ff90911615179055565b6001600160a01b0381166000908152609960205260408120545b92915050565b33610a39610ad3565b6001600160a01b031614610a5f5760405162461bcd60e51b815260040161050790611dd4565b6001600160a01b038216301415610a8957604051630134249960e71b815260040160405180910390fd5b6001600160a01b0382166000908152610135602052604090205460ff1615610ac457604051634a613c4160e01b815260040160405180910390fd5b610acf8233836113f1565b5050565b60fe546001600160a01b031690565b6000600260cc541415610b075760405162461bcd60e51b815260040161050790611e50565b600260cc556001600160a01b03831660009081526101356020526040902054839060ff16610b4857604051634a613c4160e01b815260040160405180910390fd5b6101345460ff1615610b6d57604051634a613c4160e01b815260040160405180910390fd5b6001600160a01b0384166000908152610135602052604090205460ff16610ba757604051634a613c4160e01b815260040160405180910390fd5b610bb3843330866115b5565b829150610bbf336113d2565b610c03576001600160a01b03841660009081526101306020526040902054620f424090610bec9084611e87565b610bf69190611ea6565b610c009083611ec8565b91505b61088533836116b5565b60606037805461045590611d9f565b3360009081526034602090815260408083206001600160a01b038616845290915281205482811015610c9e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610507565b610cab3385858403610fbb565b5060019392505050565b33610cbe610ad3565b6001600160a01b031614610ce45760405162461bcd60e51b815260040161050790611dd4565b60408051808201825283815260208082018490526001600160a01b038616600090815261013090915291909120610d1c916002611ab9565b5060408051838152602081018390526001600160a01b038516917ff36e5def0a9227cce1f483e62a6b168e5c1dd4aa7e887e300745cdc4c2b5ab2d910160405180910390a2505050565b60006105473384846110e0565b60606101328054806020026020016040519081016040528092919081815260200182805480156104ce57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610dae575050505050905090565b83421115610e255760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610507565b6000609a54888888610e368c611782565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610e91826117aa565b90506000610ea1828787876117f8565b9050896001600160a01b0316816001600160a01b031614610f045760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610507565b610f0f8a8a8a610fbb565b50505050505050505050565b33610f24610ad3565b6001600160a01b031614610f4a5760405162461bcd60e51b815260040161050790611dd4565b6001600160a01b038116610faf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610507565b610fb881611563565b50565b6001600160a01b03831661101d5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610507565b6001600160a01b03821661107e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610507565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383166111445760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610507565b6001600160a01b0382166111a65760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610507565b6001600160a01b0383166000908152603360205260409020548181101561121e5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610507565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290611255908490611edf565b92505081905550826001600160a01b0316846001600160a01b0316600080516020611f7c8339815191528460405161128f91815260200190565b60405180910390a35b50505050565b6001600160a01b0382166112fe5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b6064820152608401610507565b6001600160a01b038216600090815260336020526040902054818110156113725760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b6064820152608401610507565b6001600160a01b03831660009081526033602052604081208383039055603580548492906113a1908490611ec8565b90915550506040518281526000906001600160a01b03851690600080516020611f7c833981519152906020016110d3565b6001600160a01b03166000908152610131602052604090205460ff1690565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161144d9190611ef7565b6000604051808303816000865af19150503d806000811461148a576040519150601f19603f3d011682016040523d82523d6000602084013e61148f565b606091505b50915091508115806114bd57508051158015906114bd5750808060200190518101906114bb9190611f13565b155b156114e15784828260405163e7e40b5b60e01b815260040161050793929190611f30565b5050505050565b600061089b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61151760655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916116199190611ef7565b6000604051808303816000865af19150503d8060008114611656576040519150601f19603f3d011682016040523d82523d6000602084013e61165b565b606091505b509150915081158061168957508051158015906116895750808060200190518101906116879190611f13565b155b156116ad5785828260405163e7e40b5b60e01b815260040161050793929190611f30565b505050505050565b6001600160a01b03821661170b5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610507565b806035600082825461171d9190611edf565b90915550506001600160a01b0382166000908152603360205260408120805483929061174a908490611edf565b90915550506040518181526001600160a01b03831690600090600080516020611f7c8339815191529060200160405180910390a35050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b6000610a2a6117b76114e8565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061180987878787611820565b9150915061181681611903565b5095945050505050565b6000806fa2a8918ca85bafe22016d0b997e4df60600160ff1b0383111561184d57506000905060036118fa565b8460ff16601b1415801561186557508460ff16601c14155b1561187657506000905060046118fa565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa1580156118ca573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166118f3576000600192509250506118fa565b9150600090505b94509492505050565b600081600481111561191757611917611f65565b14156119205750565b600181600481111561193457611934611f65565b141561197d5760405162461bcd60e51b815260206004820152601860248201527745434453413a20696e76616c6964207369676e617475726560401b6044820152606401610507565b600281600481111561199157611991611f65565b14156119df5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610507565b60038160048111156119f3576119f3611f65565b1415611a4c5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610507565b6004816004811115611a6057611a60611f65565b1415610fb85760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610507565b8260028101928215611ae7579160200282015b82811115611ae7578251825591602001919060010190611acc565b50611af3929150611af7565b5090565b5b80821115611af35760008155600101611af8565b60005b83811015611b27578181015183820152602001611b0f565b838111156112985750506000910152565b60008151808452611b50816020860160208601611b0c565b601f01601f19169290920160200192915050565b602081526000611b776020830184611b38565b9392505050565b80356001600160a01b0381168114611b9557600080fd5b919050565b600060208284031215611bac57600080fd5b611b7782611b7e565b60008060408385031215611bc857600080fd5b611bd183611b7e565b946020939093013593505050565b600080600060608486031215611bf457600080fd5b611bfd84611b7e565b9250611c0b60208501611b7e565b9150604084013590509250925092565b600060208284031215611c2d57600080fd5b5035919050565b8015158114610fb857600080fd5b60008060408385031215611c5557600080fd5b611c5e83611b7e565b91506020830135611c6e81611c34565b809150509250929050565b600080600060608486031215611c8e57600080fd5b611c9784611b7e565b95602085013595506040909401359392505050565b6020808252825182820181905260009190848201906040850190845b81811015611ced5783516001600160a01b031683529284019291840191600101611cc8565b50909695505050505050565b600080600080600080600060e0888a031215611d1457600080fd5b611d1d88611b7e565b9650611d2b60208901611b7e565b95506040880135945060608801359350608088013560ff81168114611d4f57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215611d7f57600080fd5b611d8883611b7e565b9150611d9660208401611b7e565b90509250929050565b600181811c90821680611db357607f821691505b602082108114156117a457634e487b7160e01b600052602260045260246000fd5b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611e4957611e49611e1f565b5060010190565b6020808252601f908201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604082015260600190565b6000816000190483118215151615611ea157611ea1611e1f565b500290565b600082611ec357634e487b7160e01b600052601260045260246000fd5b500490565b600082821015611eda57611eda611e1f565b500390565b60008219821115611ef257611ef2611e1f565b500190565b60008251611f09818460208701611b0c565b9190910192915050565b600060208284031215611f2557600080fd5b8151611b7781611c34565b6001600160a01b03841681528215156020820152606060408201819052600090611f5c90830184611b38565b95945050505050565b634e487b7160e01b600052602160045260246000fdfeddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa2646970667358221220ba980cc25356dcfa5f182e07bcaef3c92529d81cf37a7e9a42f25e3e6f19104864736f6c634300080b0033";

export class CrossChainCanonicalBase__factory extends ContractFactory {
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
  ): Promise<CrossChainCanonicalBase> {
    return super.deploy(overrides || {}) as Promise<CrossChainCanonicalBase>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): CrossChainCanonicalBase {
    return super.attach(address) as CrossChainCanonicalBase;
  }
  connect(signer: Signer): CrossChainCanonicalBase__factory {
    return super.connect(signer) as CrossChainCanonicalBase__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrossChainCanonicalBaseInterface {
    return new utils.Interface(_abi) as CrossChainCanonicalBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CrossChainCanonicalBase {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CrossChainCanonicalBase;
  }
}
