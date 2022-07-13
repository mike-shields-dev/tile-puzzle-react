import { gameConfig } from "../gameConfig"
import unsortedUniqueIntegerArray from "./unsortedUniqueIntegerArray"
import countInversions from "./countInversions"
const MIN_LENGTH = gameConfig.MIN_RES ** 2

export default function generateModel(length) {
  if(!Number.isInteger(length)) {
    throw new Error("expect argument to be an integer")
  }
  if(length < MIN_LENGTH) {
    throw new Error(`expect argument to be an integer greater than ${MIN_LENGTH}`)
  }

  let model
  
  while(!model) {
    const tempModel = unsortedUniqueIntegerArray(length)
    const inversionCount = countInversions(tempModel)

    if(inversionCount % 2 === 0 && inversionCount > length * 2) {
      model = tempModel
    }
  }
  return model
}