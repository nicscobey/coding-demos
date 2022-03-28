// function findMax(arr, max, index = 0){
//     // This function returns the largest number in a given array.
//     if (index === arr.length) return max  
//     if (index === 0) max = arr[index]
//     else if (max < arr[index]) max = arr[index]
//     return findMax(arr, max, index + 1)
// }

// let testArray = [3,4,2,1,2];
// let testNegatives = [-1, -4, -2];

// console.log(findMax(testArray))
// console.log(findMax(testNegatives))


// function factorial(num){
//     // This function returns the factorial of a given number.
//     if (num > 1) return num * factorial(num -1)
//     return num
// }

// console.log(factorial(4))





// function fibonacci(target, index = 0, oneAgo = 1, twoAgo = 1){
//     // This function returns the Nth number in the fibonacci sequence.
//     // https://en.wikipedia.org/wiki/Fibonacci_number
//     // For this function, the first two fibonacci numbers are 1 and 1

//NOTE: THERE ARE BETTER SOLUTIONS THAN WHAT I WROTE HERE
//     console.log(index, oneAgo, twoAgo)
//     if (target === 0 || target === 1) return 1
//     if (index === target - 1) return oneAgo
//     else {
//         return fibonacci(target, index + 1, twoAgo + oneAgo, oneAgo)
//     }
// }

// console.log(fibonacci(5))



// function findLongestWordLength(str) {
//     let words = str.split(" ")
//     console.log(words)
//     let longestStr = 0
//     for (let word of words) {
//       if (word.length > longestStr) longestStr = word.length
//     }
//     console.log(longestStr)
//     return longestStr;
//   }
  
//   findLongestWordLength("The quick brown fox jumped over the lazy dog");



function gcd(a, b) {
    console.log('a', a, 'b', b)
    if (a%b === 0) return b
    else if (b===0) {
        return 1
    }
    else {
        return gcd(b, a%b)
    }
}

console.log(gcd(20, 8))