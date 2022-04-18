// NOTE: these must stay up-to-date with the latest party factory contracts https://github.com/PartyDAO/partybid/tree/main/deploy
export const partyLogicAddresses = Object.freeze({
  bid: "0x744c2be04d079eddb21c1a9bb13bb5259a368614",
  buy: "0x2045427276b2ad409202eea1e0c81e150f3203e4",
  collection: "0x0c696f63a8cfd4b456f725f1174f1d5b48d1e876",
});

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
