import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CreatePOAPLocation } from "../generated/POAPScoreLocationVerifier/POAPScoreLocationVerifier"

export function createCreatePOAPLocationEvent(
  locationId: BigInt,
  startTime: BigInt,
  endTime: BigInt,
  merkleRoot: Bytes
): CreatePOAPLocation {
  let createPoapLocationEvent = changetype<CreatePOAPLocation>(newMockEvent())

  createPoapLocationEvent.parameters = new Array()

  createPoapLocationEvent.parameters.push(
    new ethereum.EventParam(
      "locationId",
      ethereum.Value.fromUnsignedBigInt(locationId)
    )
  )
  createPoapLocationEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  createPoapLocationEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  createPoapLocationEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )

  return createPoapLocationEvent
}
