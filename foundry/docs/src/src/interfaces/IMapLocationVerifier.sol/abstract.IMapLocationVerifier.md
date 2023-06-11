# IMapLocationVerifier
[Git Source](https://github.com/nezz0746/lens-social-location/blob/478ee50102d2da08f8cd5e194c7e6275bdfc1fa7/src/interfaces/IMapLocationVerifier.sol)

Interface for verifying that an account is allowed to move to a location


## Functions
### verifyLocation

Verifies that the account is allowed to move to the location


```solidity
function verifyLocation(address account, uint256 locationId, bytes calldata data) public virtual returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|The account to verify|
|`locationId`|`uint256`|The location to verify|
|`data`|`bytes`|The data to verify|


