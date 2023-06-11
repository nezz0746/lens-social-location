import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  LocationVerified,
  Move,
  TransferBatch,
  TransferSingle,
  URI
} from "../generated/ETHPragueMap/ETHPragueMap"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createLocationVerifiedEvent(
  account: Address,
  locationId: BigInt,
  verifierId: BigInt
): LocationVerified {
  let locationVerifiedEvent = changetype<LocationVerified>(newMockEvent())

  locationVerifiedEvent.parameters = new Array()

  locationVerifiedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  locationVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "locationId",
      ethereum.Value.fromUnsignedBigInt(locationId)
    )
  )
  locationVerifiedEvent.parameters.push(
    new ethereum.EventParam(
      "verifierId",
      ethereum.Value.fromUnsignedBigInt(verifierId)
    )
  )

  return locationVerifiedEvent
}

export function createMoveEvent(
  account: Address,
  lat: BigInt,
  lng: BigInt,
  previousLocationID: BigInt,
  newLocationID: BigInt
): Move {
  let moveEvent = changetype<Move>(newMockEvent())

  moveEvent.parameters = new Array()

  moveEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  moveEvent.parameters.push(
    new ethereum.EventParam("lat", ethereum.Value.fromUnsignedBigInt(lat))
  )
  moveEvent.parameters.push(
    new ethereum.EventParam("lng", ethereum.Value.fromUnsignedBigInt(lng))
  )
  moveEvent.parameters.push(
    new ethereum.EventParam(
      "previousLocationID",
      ethereum.Value.fromUnsignedBigInt(previousLocationID)
    )
  )
  moveEvent.parameters.push(
    new ethereum.EventParam(
      "newLocationID",
      ethereum.Value.fromUnsignedBigInt(newLocationID)
    )
  )

  return moveEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}
