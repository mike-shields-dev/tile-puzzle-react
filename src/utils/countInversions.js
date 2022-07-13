import { gameConfig } from "../gameConfig"
const MIN_LENGTH = gameConfig.MIN_RES ** 2

export default function countInversions(integerArray) {
  if (!Array.isArray(integerArray)) {
    throw new Error("expect argument to be an array")
  }

  if (integerArray.length < MIN_LENGTH) {
    throw new Error(
      `expect argument to be an array with length greater than ${MIN_LENGTH}`
    )
  }

  if (!integerArray.every(Number.isInteger)) {
    throw new Error("expect argument to be an array of integers")
  }

  if (!Number.isInteger(Math.sqrt(integerArray.length))) {
    throw new Error(
      "expect argument to be an array with a length that is a square number"
    )
  }

  let inversions = 0

  for (let i = 0; i < integerArray.length -1; i++) {
    for (let j = i + 1; j < integerArray.length; j++) {
      if (integerArray[i] > integerArray[j]) {
        inversions++
      }
    }
  }
  return inversions
}
