# POAPScoreLocationVerifier
[Git Source](https://github.com/nezz0746/lens-social-location/blob/478ee50102d2da08f8cd5e194c7e6275bdfc1fa7/src/POAPScoreLocationVerifier.sol)

**Inherits:**
[IMapLocationVerifier](/src/interfaces/IMapLocationVerifier.sol/abstract.IMapLocationVerifier.md)


## State Variables
### locationSettings

```solidity
mapping(uint256 => LocationSettings) public locationSettings;
```


## Functions
### constructor


```solidity
constructor();
```

### verifyLocation


```solidity
function verifyLocation(address account, uint256 locationId, bytes calldata data) public view override returns (bool);
```

### createPoapLocation


```solidity
function createPoapLocation(uint256 locationId, uint256 startTime, uint256 endTime, bytes32 merkleRoot) public;
```

## Events
### CreatePOAPLocation

```solidity
event CreatePOAPLocation(uint256 locationId, uint256 startTime, uint256 endTime, bytes32 merkleRoot);
```

## Structs
### LocationSettings

```solidity
struct LocationSettings {
    uint256 startTime;
    uint256 endTime;
    bytes32 merkleRoot;
}
```

