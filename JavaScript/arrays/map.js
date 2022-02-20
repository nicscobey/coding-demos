// What is logged to the console?

const myNumbers = [0,1,2,3,4]
const logNumbers = () => {
  return myNumbers.map(number => {
    return number + myNumbers[number]
  })
}

console.log(logNumbers())

// undefined
// 0
// [0,1,2,3,4]
// [0,2,4,6,8] * 
// [[0,0],[1,1],[2,2],[3,3],[4,4]