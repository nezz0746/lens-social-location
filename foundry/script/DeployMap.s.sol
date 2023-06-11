// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

import "../src/Map.sol";

import "../src/POAPScoreLocationVerifier.sol";

/// TODO: Install Lens-Map
/// TODO: Import Map Module

contract DeployMap is Script {
    function setUp() public {}

    function run() public {
        vm.startBroadcast();

        // Deploy Map
        new ETHPragueMap();

        // Deploy Map Verification Module
        new POAPScoreLocationVerifier();

        vm.stopBroadcast();
    }
}
