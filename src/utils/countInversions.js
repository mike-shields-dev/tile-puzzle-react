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

  return integerArray.reduce((acc, curr, i) => {
    return acc + integerArray.slice(i + 1).filter((num) => num < curr).length
  })
}
