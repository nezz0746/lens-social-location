// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./interfaces/IMapLocationVerifier.sol";

import "openzeppelin/utils/cryptography/MerkleProof.sol";

contract POAPScoreLocationVerifier is IMapLocationVerifier {
    struct LocationSettings {
        uint256 startTime;
        uint256 endTime;
        bytes32 merkleRoot;
    }

    mapping(uint256 => LocationSettings) public locationSettings;

    event CreatePOAPLocation(
        uint256 locationId,
        uint256 startTime,
        uint256 endTime,
        bytes32 merkleRoot
    );

    constructor() {}

    function verifyLocation(
        address account,
        uint256 locationId,
        // Pass expected poap score
        bytes calldata data
    ) public view override returns (bool) {
        (uint256 expectedScore, bytes32[] memory proof) = abi.decode(
            data,
            (uint256, bytes32[])
        );

        // Verify time interval
        if (
            block.timestamp < locationSettings[locationId].startTime ||
            block.timestamp > locationSettings[locationId].endTime
        ) return false;

        return
            MerkleProof.verify(
                proof,
                locationSettings[locationId].merkleRoot,
                keccak256(abi.encode(account, expectedScore))
            );
    }

    function createPoapLocation(
        uint256 locationId,
        uint256 startTime,
        uint256 endTime,
        bytes32 merkleRoot
    ) public {
        locationSettings[locationId] = LocationSettings(
            startTime,
            endTime,
            merkleRoot
        );

        emit CreatePOAPLocation(locationId, startTime, endTime, merkleRoot);
    }
}
