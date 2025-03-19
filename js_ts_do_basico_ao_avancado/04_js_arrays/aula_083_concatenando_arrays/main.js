const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const concatArray1 = [...a1, ...a2]
const concatArray2 = a1.concat(a2)
console.log(concatArray1, concatArray2)

console.log(a1.concat(a2, [7, 8, 9], 'a'))