let numbers = "01234"
let stepOne = numbers.split("")
let stepTwo = stepOne.reduce((a,b) => {
  return parseInt(a) + parseInt(b)
})

console.log(stepTwo)

// 10
// 1234
// [1,2,3,4]
// [1,3,5,7]
// [1,3,5,7,10]