import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"
import { CreatePOAPLocation } from "../generated/schema"
import { CreatePOAPLocation as CreatePOAPLocationEvent } from "../generated/POAPScoreLocationVerifier/POAPScoreLocationVerifier"
import { handleCreatePOAPLocation } from "../src/poap-score-location-verifier"
import { createCreatePOAPLocationEvent } from "./poap-score-location-verifier-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let locationId = BigInt.fromI32(234)
    let startTime = BigInt.fromI32(234)
    let endTime = BigInt.fromI32(234)
    let merkleRoot = Bytes.fromI32(1234567890)
    let newCreatePOAPLocationEvent = createCreatePOAPLocationEvent(
      locationId,
      startTime,
      endTime,
      merkleRoot
    )
    handleCreatePOAPLocation(newCreatePOAPLocationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CreatePOAPLocation created and stored", () => {
    assert.entityCount("CreatePOAPLocation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CreatePOAPLocation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "locationId",
      "234"
    )
    assert.fieldEquals(
      "CreatePOAPLocation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTime",
      "234"
    )
    assert.fieldEquals(
      "CreatePOAPLocation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "endTime",
      "234"
    )
    assert.fieldEquals(
      "CreatePOAPLocation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "merkleRoot",
      "1234567890"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
