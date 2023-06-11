// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import "lens-map/Map.sol";

import "./interfaces/IMapLocationVerifier.sol";

// Example of a custom map contract
contract ETHPragueMap is Map {
    error InvalidProof();
    error InvalidLocation();

    // Location encoding takes 128 bits, so we can use the upper 128 bits for the verifier id
    mapping(address => uint128) public locationVerifierIds;

    constructor()
        Map(
            "ETHPrague Hackathon",
            "ipfs://bafybeiexthqwt6rw2km2jx2yisbabpjklcyoym5vanmc7jf7q6nqvudnwm/map.png",
            1000
        )
    {}

    // Basic public move function implementation
    function move(address account, uint256 lat, uint256 lng) public payable {
        _move(account, lat, lng);
    }

    function proveLocation(
        address verifier,
        address account,
        uint256 locationId,
        bytes calldata data
    ) public payable {
        // Check if the account is already @ the location
        if (balanceOf(account, locationId) == 0) {
            revert InvalidLocation();
        }

        // Verify account
        if (
            !IMapLocationVerifier(verifier).verifyLocation(
                account,
                locationId,
                data
            )
        ) {
            revert InvalidProof();
        }

        // Burn account basic location token
        _burn(account, locationId);

        // Mint account verified location token
        uint256 verifiedLocationId = locationId + locationVerifierIds[verifier];

        _mint(account, verifiedLocationId);
    }
}
