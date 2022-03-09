// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// let myString = "This is a string"
// let myNumber = 0
// let myBoolean = true
// let myArray = [0, 1, 2, 3, 4]

// // can also be declared by replaced "let" with "const" or "var"



// const myBook = {
// 	title: "The Giver",
// 	author: "Lois Lowry",
// };
// myBook.pages = 226
// console.log(myBook)







// console.log("Hello, World!")


// let a = 10

// check if palindrome


//which of the following combinations will reverse a string?

// split, reverse, join **right answer
// reverse



// function countDown(num){
//     if(num < 0){
//       return;
//     }
//     console.log(num)
//     return countDown(num - 1)
//   }

//   countDown(5)


// function sumArrayOfNums(arr, index=0, sum=0){
//     if (index === arr.length) return sum
//     sum+=arr[index]
//     return sumArrayOfNums(arr, index+1, sum)
// }

// console.log(sumArrayOfNums([1,2,3]))



// function sumArrayOfNums(arr) {
//     let sum = 0
//     arr.forEach(num => sum+=num)
//     return sum
// }

// console.log(sumArrayOfNums([1,2,3]))


// const arr = [1,2,3,4,1]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         console.log(i, "HI")
//         break
//     }
//     console.log(arr[i])
// }




// const alph = ["a", "b", "c", "d", "e"]
// console.log(alph.find(el => el === "d"))

// const letters = ['a', 'b', 'c', 'd', 'e']
// const printLetters = () => {
//     for (let letter of letters) {
//         console.log(letter)
//     }
// }

// printLetters()


// const myNums = [3,5,8,1,9,4,12,7]
// const findFour = (arr, index = 0) => {
//     if (arr[index] === 4) {
//         return index
//     }
//    return findFour(arr, index + 1)
// }

// console.log(findFour(myNums))




//problem with this: when 9 is absent, gets into infinite loop changing index to 5 and 6
// const myNums = [1,2,4,5,7,9,12]

// const findNine = (arr, index = 0) => {
//     console.log(index)
//     if (index === arr.length || index < 0) return "not found"
//     else if (arr[index] === 9) return index
//     else if (arr[index] > 9) return findNine(arr, index - 1)
//     else if (arr[index] < 9) return findNine(arr, index + 1)
// }

// console.log(findNine(myNums, Math.floor(myNums.length / 2)))



// const nums = [1,2,3,4,5,7,8]

// const findMyNum = (arr, target = 0) => {
//     let start = 0
//     let end = arr.length - 1
//     let middle = 0

//     while (start <= end) {
//         console.log('hi', middle)
//         middle = Math.floor(end + start / 2)
//         if (arr[middle] === target) return middle
//         else if (arr[middle] < target) start = middle + 1
//         else if (arr[middle] > target) end = middle - 1
//     }
//     return "-1" * (middle+1)
// }

// console.log(findMyNum(nums, 6))







//// trying to make another binary search without notes

// let myNums = [1,3,4,5,6,7,8,9]

// let findNum = (arr, target) => {
//     let start = 0
//     let end = arr.length - 1
//     let middle

//     while (start <= end) {
//         middle = Math.floor((start + end) / 2)
//         if (arr[middle] === target) {
//             return middle 
//         }
//         else if (arr[middle] < target) {
//             start = middle + 1
//         }
//         else if (arr[middle] > target) {
//             end = middle - 1
//         }
//     }
//     return -1 * (middle + 1)
// }

// console.log(findNum(myNums, 2))



//bubble search

// let numbers = [3,1,5,4,2,6]

// let bubbleSearch = (arr) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 newArr[i] = arr[j]
//             }
//             else {
//                 newArr[i] = arr[i]
//             }
//         }
//     }
// }


// console.log("a" + "b")
// console.log("a" & "b")
// console.log("a" && "b")




//recursion
const fact = (n, total = 1) => {
    while (n >= 1) {
        total *= n;
        return fact(n - 1, total)
    }
    return total
}

console.log(fact(5))