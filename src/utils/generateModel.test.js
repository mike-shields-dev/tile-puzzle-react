import generateModel from "./generateModel"
import { gameConfig } from "../gameConfig"
import countInversions from "./countInversions"
const MIN_LENGTH = gameConfig.MIN_RES ** 2

it("is a function", () => {
  expect(generateModel).toBeInstanceOf(Function)
})

it("throws if given argument is not an integer", () => {
  const tests = [1.1, "5", [], {}, true, null, undefined, NaN, Infinity]

  tests.forEach((test) => {
    expect(() => generateModel(test)).toThrow(Error)
  })
})

it("throws if given integer argument is less than MIN_LENGTH", () => {
  expect(() => generateModel(MIN_LENGTH - 1)).toThrow()
  expect(() => generateModel(MIN_LENGTH - 2)).toThrow()
})

it("returns an array", () => {
  expect(generateModel(MIN_LENGTH)).toBeInstanceOf(Array)
})

it("returns an array of integers", () => {
  expect(generateModel(MIN_LENGTH).every(Number.isInteger)).toBe(true)
})

it("returns an unsorted array of integers", () => {
  const sortedModelAscending = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  const sortedModelDescending = [8, 7, 6, 5, 4, 3, 2, 1, 0]

  expect(generateModel(MIN_LENGTH)).not.toEqual(sortedModelAscending)
  expect(generateModel(MIN_LENGTH)).not.toEqual(sortedModelDescending)
})

it("returns an array with an even number of inversions", () => {
  const model = generateModel(MIN_LENGTH)

  const inversionCount = model.reduce((acc, curr, i) => {
    return acc + model.slice(i + 1).filter((num) => num < curr).length
  })

  expect(inversionCount % 2 === 0).toBe(true)
})

it("returns an array with an inversion count greater than twice MIN_LENGTH", () => {
  const model = generateModel(MIN_LENGTH)

  const inversionCount = model.reduce((acc, curr, i) => {
    return acc + model.slice(i + 1).filter((num) => num < curr).length
  })

  expect(inversionCount > MIN_LENGTH * 2).toBe(true)
})

