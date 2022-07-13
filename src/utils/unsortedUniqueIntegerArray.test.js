import unsortedUniqueIntegerArray from "./unsortedUniqueIntegerArray"

describe("unsortedUniqueIntegerArray", () => {
  const minLength = 9

  it("is a function", () => {
    expect(unsortedUniqueIntegerArray).toBeInstanceOf(Function)
  })

  it("throws if argument is not integer", () => {
    expect(() => unsortedUniqueIntegerArray("string")).toThrow()
    expect(() => unsortedUniqueIntegerArray(true)).toThrow()
    expect(() => unsortedUniqueIntegerArray(null)).toThrow()
    expect(() => unsortedUniqueIntegerArray(undefined)).toThrow()
    expect(() => unsortedUniqueIntegerArray(NaN)).toThrow()
    expect(() => unsortedUniqueIntegerArray(Infinity)).toThrow()
    expect(() => unsortedUniqueIntegerArray([])).toThrow()
    expect(() => unsortedUniqueIntegerArray({})).toThrow()
    expect(() => unsortedUniqueIntegerArray(1.1)).toThrow()
  })

  it("throws if argument is less than 9", () => {
    expect(() => unsortedUniqueIntegerArray(minLength - 1)).toThrow()
  })

  it("returns an array", () => {
    expect(unsortedUniqueIntegerArray(minLength)).toBeInstanceOf(Array)
  })

  it("returns an array with length equal to given length argument", () => {
    expect(unsortedUniqueIntegerArray(9).length).toBe(minLength)
    expect(unsortedUniqueIntegerArray(16).length).toBe(16)
    expect(unsortedUniqueIntegerArray(25).length).toBe(25)
  })
})
