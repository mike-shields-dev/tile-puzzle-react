import countInversions from "../utils/countInversions"
import { gameConfig } from "../gameConfig"
const MIN_LENGTH = gameConfig.MIN_RES ** 2

it("is a function", () => {
  expect(countInversions).toBeInstanceOf(Function)
})

it("throws if given argument is not an array", () => {
  const tests = [1, "", {}, true, null, undefined, NaN, Infinity]

  tests.forEach((test) => {
    expect(() => countInversions(test)).toThrow(Error)
  })
})

it("throws if the given array has a length less than MIN_LENGTH", () => {
  expect(() => countInversions(Array(MIN_LENGTH - 1))).toThrow()
  expect(() => countInversions(Array(MIN_LENGTH - 2))).toThrow()
})

it("throws if the given array contains non integers", () => {
  const tests = [
    ["0", 1, 2, 3, 4, 5, 6, 7, 8],
    [false, 2, 3, 4, 5, 6, 7, 8],
    [{}, 2, 3, 4, 5, 6, 7, 8],
    [[], 2, 3, 4, 5, 6, 7, 8],
    [null, 2, 3, 4, 5, 6, 7, 8],
    [undefined, 2, 3, 4, 5, 6, 7, 8],
    [NaN, 2, 3, 4, 5, 6, 7, 8],
    [Infinity, 2, 3, 4, 5, 6, 7, 8],
    ["string", 2, 3, 4, 5, 6, 7, 8],
  ]

  tests.forEach((test) =>
    expect(() => countInversions(test)).toThrow()
  )
})

it("throws if given arrays length is not a square number", () => {
  const tests = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  ]

  tests.forEach((test) =>
    expect(() => countInversions(test)).toThrow()
  )
})

it("returns the correct number of inversions in the given array", () => {
  const tests = [
    { array: [0, 1, 2, 3, 4, 5, 6, 7, 8], inversions: 0 },
    { array: [8, 7, 6, 5, 4, 3, 2, 1, 0], inversions: 36 },
    { array: [5, 1, 6, 3, 8, 4, 2, 0, 7], inversions: 19 },
    { array: [7, 2, 6, 3, 4, 8, 1, 0, 5], inversions: 22 },
    { array: [4, 8, 2, 5, 3, 6, 1, 7, 0], inversions: 22 },
    { array: [1, 8, 3, 7, 5, 0, 2, 6, 4], inversions: 19 },
  ]

  tests.forEach((test) => {
    expect(countInversions(test.array)).toBe(test.inversions)
  })
})
