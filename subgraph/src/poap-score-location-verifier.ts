import { CreatePOAPLocation as CreatePOAPLocationEvent } from "../generated/POAPScoreLocationVerifier/POAPScoreLocationVerifier"
import { CreatePOAPLocation } from "../generated/schema"

export function handleCreatePOAPLocation(event: CreatePOAPLocationEvent): void {
  let entity = new CreatePOAPLocation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.locationId = event.params.locationId
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.merkleRoot = event.params.merkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
