# Lens Social Proof of Location -  ETHPrague Hack

Building on top of of a MAP in the form of a ERC1155 token [(more info)](https://github.com/nezz0746/lens-map)

Problem:

Movements on the map were arbitrary & unverifier.

Solution:

Using a modular artitecture to allow verification of location-tokens. In this hack I built a POAPLocationVerifier in
which you can determine a time interval when you'd like to verify that addresses were in the area. On creation of the
even you provide a snapshot of POAPs in this basic format:

```json
{
        "0x225f137127d9067788314bc7fcc1f36746a3c3B5": 4,
        "0xAe46E37B5628947aC159F001a847E87452175D99": 7,
        "0xe05875F287C028901798aC2Dc8C22Ba908b8eF36": 1,
        "0x70564145fA8e8A15348EF0190e6B7c07A2120462": 1,
        "0x2B5c7025998f88550Ef2fEce8bf87935f542C190": 5,
        "0xBce6053B60C5913f4190C95F629f473BE0E379Aa": 8
}
```

where the number is the amount of POAPs accumulated by the accound during the event. 

Assumption is that **the stronger the score the more you can trust that the account holder was present on site.**

TODO:

Was going to create a custom Lens Module to allow post creators to gate collect & encrypt their publication by location (or even better location score by providing a threshold of trust)