# ETHPragueMap
[Git Source](https://github.com/nezz0746/lens-social-location/blob/478ee50102d2da08f8cd5e194c7e6275bdfc1fa7/src/Map.sol)

**Inherits:**
Map


## State Variables
### locationVerifierIds

```solidity
mapping(address => uint128) public locationVerifierIds;
```


## Functions
### constructor


```solidity
constructor()
    Map("ETHPrague Hackathon", "ipfs://bafybeiexthqwt6rw2km2jx2yisbabpjklcyoym5vanmc7jf7q6nqvudnwm/map.png", 1000);
```

### move


```solidity
function move(address account, uint256 lat, uint256 lng) public payable;
```

### proveLocation


```solidity
function proveLocation(address verifier, address account, uint256 locationId, bytes calldata data) public payable;
```

## Events
### LocationVerified

```solidity
event LocationVerified(address indexed account, uint256 locationId, uint128 verifierId);
```

## Errors
### InvalidProof

```solidity
error InvalidProof();
```

### InvalidLocation

```solidity
error InvalidLocation();
```

