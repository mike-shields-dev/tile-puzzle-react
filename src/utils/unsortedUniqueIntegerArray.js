export default function randomUniqueIntArray(length) {
  if(!Number.isInteger(length)) {
    throw new Error("expect length argument to be an integer");
  }
  if(length < 9) {
    throw new Error("expect length argument to be an integer greater than 9");
  }

  const arr = []
  while(arr.length < length) {
    const random = Math.floor(Math.random() * length)
    if(!arr.includes(random)) {
      arr.push(random)
    }
  }
  return arr
}