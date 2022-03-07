// comparing for loop w/ recursion

// function calcSum(myArr) {
//     let sum = 0
//     for (let i = 0; i < myArr.length; i++) {
//         sum += myArr[i]
//     }
//     return sum
// }

// console.log(calcSum([1,2,3]))



// function calcSum(myArr, index = 0, sum = 0) {
//     if (index === myArr.length) {
//         return sum
//     }
//     sum += myArr[index]
//     return calcSum(myArr, index + 1, sum)
// }

// console.log(calcSum([1,2,3]))










// 

function myFunction(arr, index = 0, sum = 0, target) {
    if (sum === target) {
        return
    }
}