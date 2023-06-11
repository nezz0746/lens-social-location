// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

/// @title IMapLocationVerifier
/// @notice Interface for verifying that an account is allowed to move to a location
abstract contract IMapLocationVerifier {
    /// @notice Verifies that the account is allowed to move to the location
    /// @param account The account to verify
    /// @param locationId The location to verify
    /// @param data The data to verify
    function verifyLocation(
        address account,
        uint256 locationId,
        bytes calldata data
    ) public virtual returns (bool);
}
