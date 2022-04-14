// source code for NonReceivableInitializedProxySourceCode from https://github.com/PartyDAO/partybid/blob/main/contracts/NonReceivableInitializedProxy.sol
// todo: should we download this from github rather than hardcode it?
export const NonReceivableInitializedProxySourceCode = `// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

/**
 * @title NonReceivableInitializedProxy
 * @author Anna Carroll
 */
contract NonReceivableInitializedProxy {
    // address of logic contract
    address public immutable logic;

    // ======== Constructor =========

    constructor(address _logic, bytes memory _initializationCalldata) {
        logic = _logic;
        // Delegatecall into the logic contract, supplying initialization calldata
        (bool _ok, bytes memory returnData) = _logic.delegatecall(
            _initializationCalldata
        );
        // Revert if delegatecall to implementation reverts
        require(_ok, string(returnData));
    }

    // ======== Fallback =========

    fallback() external payable {
        address _impl = logic;
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            let result := delegatecall(gas(), _impl, ptr, calldatasize(), 0, 0)
            let size := returndatasize()
            returndatacopy(ptr, 0, size)

            switch result
            case 0 {
                revert(ptr, size)
            }
            default {
                return(ptr, size)
            }
        }
    }
}`;

export const collectionPartyLogicAddress =
  "0x0c696f63a8cfd4b456f725f1174f1d5b48d1e876";

// from hasura:
// query MyQuery {
//     party(where: {partyType: {_eq: "collection"}}) {
//       id
//       partyAddress
//       transactionHash
//     }
//   }
export const collectionParties = Object.freeze([
  {
    id: 1232,
    partyAddress: "0x93f3cac91881f2373a3332877e95139137682329",
    transactionHash:
      "0x7073c7d49ba9db10e8107f71086b5244c9fe9cae8a4e7c8b64e5c8657241f99b",
  },
  {
    id: 1236,
    partyAddress: "0x7cc08f50e4cb7823d563777218d715073c3201d5",
    transactionHash:
      "0xc8867ce03ba387dc0efe7a09aab7d1fec1c5bf1d32911b3858cca6e429662a58",
  },
  {
    id: 1237,
    partyAddress: "0x51a94edd0bb33c2b2e91160dd8ce6526f337a90c",
    transactionHash:
      "0x217052eedfbacc8c62a46d68b0972da1bad22eca6d471e459a74b63478240275",
  },
  {
    id: 1238,
    partyAddress: "0x87bc16082c3eca1a4553fe3c258cc9db9793d327",
    transactionHash:
      "0x0862015a2c1b098ac307051aa7da09ba92e9304e857a27668ec16133b4890890",
  },
  {
    id: 1240,
    partyAddress: "0x122eede80ecd963b7c3de323b374efc7ff3cb282",
    transactionHash:
      "0xb5082ee8353abb07f6f43c4d8192a6f9d38e82a84fc4722b51b9aa53eafb1398",
  },
  {
    id: 1249,
    partyAddress: "0x0c57466f85247a3b0c15177d6770267f0d5ae11c",
    transactionHash:
      "0xc009fe7085660204b10d03ec401f926f0cdcec6b7064f250ddc2789b95b7aea7",
  },
  {
    id: 1257,
    partyAddress: "0x737d608f3c7eeed8bfca5248953d3737e39d0816",
    transactionHash:
      "0x3d68a94577ca228d496eaddc2821ea63b177d0fbfea9955bcb08c730ffa07c5d",
  },
  {
    id: 1259,
    partyAddress: "0x73db43c66a5ecbf2e47bea0edfdfb150cdcbfed8",
    transactionHash:
      "0xbfc80531a822a1a2428ad725f1a5799a0ace03f58272a6f54e5bc9ec6a2bf176",
  },
  {
    id: 1278,
    partyAddress: "0xbaf10241c9c23f22076460569ef6e88c4092f58f",
    transactionHash:
      "0xaeee350bb10eafe10fc74c49b304486c2d2d3ae937a708cd07a30a904318fe3c",
  },
  {
    id: 1297,
    partyAddress: "0x33d62346c347ea8e6830c3439e752949cbdc98c4",
    transactionHash:
      "0x93f2607fade0eea6bb9399d00068dc40460c821f2b9bb56440f030bbc6610d47",
  },
  {
    id: 1325,
    partyAddress: "0x8da351a5f55bfd87a66ef01339c891130bbcdad9",
    transactionHash:
      "0xb37064c81c295958f41ced2301393d3234205de28740bbe105f5939469106dd2",
  },
  {
    id: 1326,
    partyAddress: "0xcee9d079c4952d0f8d44e0af33b8829cb1dc3a85",
    transactionHash:
      "0x93ac9d5af46ea22d3a04caa4178bfe7df710e336acda3b438af7e011991f6b78",
  },
  {
    id: 1330,
    partyAddress: "0xb20d51d69fcb6c7a812cbd9c123dee9c29fdff3f",
    transactionHash:
      "0x33f9f4c7c45d4cfa11e26630b7812e24a59bd18eb012ff97c0699f0e9cf849da",
  },
  {
    id: 1339,
    partyAddress: "0x4c0913a77d366c5dfe3e3dc04d5d6273a29deabc",
    transactionHash:
      "0x13f9bcb7845520779dff97b53ee8c821b877d77e65b8f5ed6745a842871b273b",
  },
  {
    id: 1340,
    partyAddress: "0x0cc88e423f7fd71d89dd074449cf5af6c5c9ce9f",
    transactionHash:
      "0x027b0ea86550e567aaf958c55c7201e741e31aa08d278529d7abe4d550e9dc81",
  },
  {
    id: 1344,
    partyAddress: "0xf2a851e341bd0548cd1358eab3196472d434cdd7",
    transactionHash:
      "0xe9e2c727a524b725f6bf75983182f07e265c5ee1a0eae74d80b6475568befe71",
  },
  {
    id: 1345,
    partyAddress: "0x48f90593c3c29e8dc26b34a7b374f98f260a0840",
    transactionHash:
      "0x285385cff2211f4fb70e148b1a637f1f2b2bfff8bcdd845e5a3182caefa1f8b8",
  },
  {
    id: 1347,
    partyAddress: "0x92fd3098d985e5d91cd6a6b3cb3b963340d7fced",
    transactionHash:
      "0x29ac340cbbcdbd1d783bfac73906490d2bf59a8ea8d08df0087e0cff71b237d4",
  },
  {
    id: 1348,
    partyAddress: "0xa26f8fc8af4526a2196a7822368cb02322a7a30f",
    transactionHash:
      "0x60c6d4d0fd732b197462983af057e61b89e0a49819c585badb49d7cfc3531e71",
  },
  {
    id: 1355,
    partyAddress: "0x063ea68edc03d986e0f99b2fa3e665582d0c918a",
    transactionHash:
      "0xbeacd5071dd79de98a5276406590363825805ec4e58e6d2fb87b173dcc8cde58",
  },
  {
    id: 1358,
    partyAddress: "0xb44040d4e89905fcebbc2ae1dfbaa7fe3ca7495e",
    transactionHash:
      "0x8709d6f66430e074306facadb11a83313f4b1a4ac3c1716e77e2403ec5b7574c",
  },
  {
    id: 1359,
    partyAddress: "0xd8dc3a69bc573f4df99166456c51c82559bca6d6",
    transactionHash:
      "0x74b678d4692e218285e65bc252283292a8b3c48c8f59f9cb8864b701693841b3",
  },
  {
    id: 1360,
    partyAddress: "0xd47c68dbf231b68af9a137bf8d30706cf07b8be2",
    transactionHash:
      "0x1fb174c777e4542e2e6e94eba3927c6ca73b8c6e3202acb1836201291cde57c6",
  },
  {
    id: 1369,
    partyAddress: "0x728d150e16136c003ea70986c00fd1a7b5c94dd7",
    transactionHash:
      "0x837a6539a9c58edaf6e61dfe0226c32bb4dc36352b81e6c660789447b4af86e1",
  },
  {
    id: 1370,
    partyAddress: "0x9f1b38d14f2887c85459f6247e364cdae64e37c5",
    transactionHash:
      "0x0474f82422768f8611b4abbf237807287cd5ff03c9089bffff34dad292138cf7",
  },
  {
    id: 1372,
    partyAddress: "0xc1b73706b82e529c0f4fd9b80502e9201a38a9b0",
    transactionHash:
      "0xcdf26b67fb9e96687257a17b1346b78ddaae92ea4161e592d43099a3ab1cae15",
  },
  {
    id: 1389,
    partyAddress: "0xe6d7a7ef77067e6baf9c6d22363e1aca50fbaf69",
    transactionHash:
      "0xc8cc6deb89857957f90674b170ad8329a10f69393a5df6f263dd8c12fe3b1055",
  },
  {
    id: 1433,
    partyAddress: "0xb71818c4d5dbebc4ae0d053eaca3e247f0b5cf35",
    transactionHash:
      "0x3fbba06f562d25a9d55ea20380f67eacc1a574569fd8f6eb9679e77e0f2b3a32",
  },
  {
    id: 1452,
    partyAddress: "0x26ff211af826a2677a244a19aa771de108c43914",
    transactionHash:
      "0x1e386e75dbbb223bf4aa08acec283d57cf20634a552329dc4546f12af5b27835",
  },
  {
    id: 1453,
    partyAddress: "0x95f6f3c4fde09ae1273378ad837990bfff855ca3",
    transactionHash:
      "0x46449df1cfe873f7c78221b7126e7d2add485010be23e9fb6680ce51a82ce273",
  },
  {
    id: 1457,
    partyAddress: "0xd7bff5fd973d1a816a3d590dffe1bd79ec50573d",
    transactionHash:
      "0xef963f7098929dcdea43b7e337f8cf44e4485328e0dd1b764b7a632c1a71b3b2",
  },
  {
    id: 1463,
    partyAddress: "0x9e09062b69c6113fa6abcf8a5c3ccad5576a77c3",
    transactionHash:
      "0xddcc86775b8f5135acb2076ddaec53aeb695df08ed24cccfaa439cf22c2dbab6",
  },
  {
    id: 1465,
    partyAddress: "0x804cedd4257c716f60d427f9e9e0ba153d36faa1",
    transactionHash:
      "0xbc952a3a7db51cfaf0c502763cd6b51b8e73a107dce43996ad74b2697b6e686f",
  },
  {
    id: 1469,
    partyAddress: "0xc65b367bd2cacbe55092304d6f5150955180cf52",
    transactionHash:
      "0x4dcf8b7b74fd4dafc412e1b00a8157172700aa53677683c9c42ef435b82c4daf",
  },
  {
    id: 1470,
    partyAddress: "0x9e51c260ca5a1dd910f75e3b1fa51f71493e6e8c",
    transactionHash:
      "0x375ba122ca8b7dc5a324ad8b5548e05b566c1930c59802251a4ccc27cbc36fcb",
  },
  {
    id: 1472,
    partyAddress: "0x4979ea39c2a881742246a933ab741b99d1254207",
    transactionHash:
      "0x4cf689bd354575d3331b38a525a8d77c1d65ed63292994f7007474c12c80c883",
  },
  {
    id: 1473,
    partyAddress: "0xc85da19e9ee285e7432d901747ca89e6a2438c20",
    transactionHash:
      "0x147e5d2df5ea1f7594c7706ca2f8935bd0ddd57a9582946c176490eebf900776",
  },
  {
    id: 1475,
    partyAddress: "0xb5c658e407cce581c2ae3ee9d6fb9b9b25845ddf",
    transactionHash:
      "0xa9fb9a030c1a3fe56744c9122bf6f86b3e7db7e134cc5a9178ee402ada9f2be0",
  },
  {
    id: 1477,
    partyAddress: "0x6802fa94085f55101347be0ef6042251f8987f9c",
    transactionHash:
      "0x6c3e9da3b28bab481eb4d271eefe670f3d043087a26220e87a43f744506ad6bb",
  },
  {
    id: 1482,
    partyAddress: "0xa3a7b357816b29e15320edc512eabbfaddd445cd",
    transactionHash:
      "0x819bf3bf68df650cae59e2ca77cf4ad051f7348b0b6558b27d96076d5a09da10",
  },
  {
    id: 1490,
    partyAddress: "0x1bcd70b3a435504167cba236f9e4e58cc843311d",
    transactionHash:
      "0xf61357c26feb788e8945750e55704c85a8a1a81e586ff4a9da85c186b3cb9a06",
  },
  {
    id: 1492,
    partyAddress: "0x042f92d42ec5959c5e37066153c05cde38f19b00",
    transactionHash:
      "0xfb039cce49460d0fbca9a7df4e67e381d650554413114cc9df739614ff64afc3",
  },
  {
    id: 1493,
    partyAddress: "0xfb75b5c1373d4ab9a67b14d925ec4a4d8c87888e",
    transactionHash:
      "0xc85571d37fd792deda8b3111410a19b758c9bee523e89c9c08e73e665d4c2b6b",
  },
  {
    id: 1494,
    partyAddress: "0xdee2631bf6a517c84213f64e9fc44044dce5fc2c",
    transactionHash:
      "0x27461739311c8e061c3b12ae2f2fd4b6cc7af2809c8df6100c8c7fb2dbc1a979",
  },
  {
    id: 1495,
    partyAddress: "0x40b1ee27a95c063f3619a1aeddf7cca67e901812",
    transactionHash:
      "0x7d1a1b5ad11a198c19f16dcdec87e4bc2b94cfe8972835f0488ebd2dfc17c7dc",
  },
  {
    id: 1496,
    partyAddress: "0xdc26542fce58d8f0bbea117dce27a962d56c2b12",
    transactionHash:
      "0x18b1d7a85b3f6886a6bebf149e4336abca4e79f66bd6a29d3c10f96a3cce49bc",
  },
  {
    id: 1500,
    partyAddress: "0x704918155b2d013d5ebc5b53e99b714761657033",
    transactionHash:
      "0x4ba756232a34f11c09fccca8d3bbfadd33ece2742b5b957c1d53a1aaeb6d5cbe",
  },
  {
    id: 1501,
    partyAddress: "0xc2c5fe9bf91fad5b3991a620c75c4057cf7a59c6",
    transactionHash:
      "0xb7106a1e57bdea7c19bc7fd64548c27b1f05b09d9bd9765ff71fa1cb895a68e9",
  },
  {
    id: 1504,
    partyAddress: "0xfb1e3ab932da7a17fc424d3c2f0117dd9cdaca99",
    transactionHash:
      "0xbb6dbf764424e2c875ed37498c0feab71639c6fd00a233ccc93944410444848c",
  },
  {
    id: 1505,
    partyAddress: "0x2dea912dcc9610a8ec5f72ac6a9d590deecc3f9c",
    transactionHash:
      "0x8d715b20323c16f18b7738ac2370b71b58fe6a29c059e3a2cdf6a0b267ce4f0c",
  },
  {
    id: 1506,
    partyAddress: "0xd37efd3d8f06fad78236e52c687938af1c565b62",
    transactionHash:
      "0x5e98128b9effa9930d69bc0fc6573a8b8937a3865ceba434c8fc96da1e2550b5",
  },
  {
    id: 1509,
    partyAddress: "0x5e35627d2c1e1f7a45a7eedfde26ca1e4bfa402d",
    transactionHash:
      "0xd4d05d28cf2dd728c4c89aca34f71d2a76b55699887aee18e196501ee1e0d9a4",
  },
  {
    id: 1510,
    partyAddress: "0xc012593e857762b5db8296219fd472a9a1be1f0f",
    transactionHash:
      "0x2ec721cf5129a7bef17927b546ceba080779cb43bcb730d1003aacf97e66932a",
  },
  {
    id: 1512,
    partyAddress: "0x3317e82cfda8f199893506812be15e2b0c7d201f",
    transactionHash:
      "0x0e34d33b26557a37bac32e8d80fe1a11a85434c47bf9cdbabe5271eb9bc8c944",
  },
  {
    id: 1514,
    partyAddress: "0x261d757b2b4592579df3a79a57acbf056f9948ad",
    transactionHash:
      "0xdc8862fb650fd5a78dc6c27dbf83dbb83d70050634eb46c1d65a7149bedec210",
  },
  {
    id: 1515,
    partyAddress: "0xa00a649b921300d17e4e175a6ac2306163a7073b",
    transactionHash:
      "0xc46a72d622b8147d1c9efdccb01a0443f74818009428f6c13e5b7c315b69f05d",
  },
  {
    id: 1517,
    partyAddress: "0xcef303ca808cc6acdbc354d6b904e1ca5638cbad",
    transactionHash:
      "0x0fcc240fdfcd00362280b4ff23d8d381432aae7c4f21fe581c8a9a66db27ffe1",
  },
  {
    id: 1523,
    partyAddress: "0x68837b480e13c6ee16119e02f5bd3cb2e62fe165",
    transactionHash:
      "0x90f588d9251c584e8ee8a4eec31fe38fbaa97dcdf05b29e4bf9f5a2a2258ee21",
  },
  {
    id: 1524,
    partyAddress: "0xa03eca19fb57d622026a213f8c0ddc84176bd652",
    transactionHash:
      "0xec96aa351f56741f331cb7a31a103a90e82fbbcec96b10a1f9ddb6247a0a9c5b",
  },
  {
    id: 1525,
    partyAddress: "0xfeb558b20049674bcf895ed75b94468de16122dd",
    transactionHash:
      "0x018e0338f016460af6966320a7492387952d8b1fa8e97e818c277ce42cad7b13",
  },
  {
    id: 1526,
    partyAddress: "0x1dd6866e1b69a4fbd37772e8a8e393a015c65163",
    transactionHash:
      "0x97e6a72ee7caa38e5ccc24c1bbe427c4aa7cfba617bd0095b1c40fa9872a5584",
  },
  {
    id: 1528,
    partyAddress: "0x2bdef0a6290bb327ece2f0b1e1c6c4ac85b8c841",
    transactionHash:
      "0xe5e947faaecaee3a7b95ef91ea916ad5595f124ee5483d30c2150e1f8601af2b",
  },
  {
    id: 1529,
    partyAddress: "0xef802fae6eb5b2de438c008a73d7d18c4df049f2",
    transactionHash:
      "0xf5d0d502ca4c8faad3711b02c0c7097260acd31e2637fd5ad0bea8cabf4edf00",
  },
  {
    id: 1531,
    partyAddress: "0x74e0da59d46535463053f8ff44837d581a77dfab",
    transactionHash:
      "0x3f5f54c00839143e6f95422184b63142a8fa614fbe70ccb5f1b1b195f4db6fa7",
  },
  {
    id: 1536,
    partyAddress: "0x8b9c82d4ddecbf729458b3d55c6b11a61dbc783a",
    transactionHash:
      "0xaf3b1f6e89d9a4393b4dd99f341d95812013a34e24497cee3fba681411a81ea0",
  },
  {
    id: 1538,
    partyAddress: "0x7e9d7eaf3a4fdcca46c12297c15934bddf87a6a3",
    transactionHash:
      "0xa94b2b5b1155e2456823c64e35227c91cffeeb8be6a070af5f2e9fb12c647e99",
  },
  {
    id: 1540,
    partyAddress: "0x90a8edb3f9b84011e89e1cb65c9f929e764b4654",
    transactionHash:
      "0xf7e238bf400ec05892348ffc2ae1fabaa4553f0ffc95859ba05bf22c294db31c",
  },
  {
    id: 1545,
    partyAddress: "0xa6f79a5c47a1573cac93f193cb977acd058224ea",
    transactionHash:
      "0xf472ffdf2f21ba8302231b97b114dbf7ab1347403b1045d8b4d5136d03032b59",
  },
]);
