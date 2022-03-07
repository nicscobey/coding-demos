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
//     if (index == arr.length) {return sum}
//     sum+=arr[index]
//     return sumArrayOfNums(arr, index+1, sum)
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

const letters = ['a', 'b', 'c', 'd', 'e']
const printLetters = () => {
    for (let letter of letters) {
        console.log(letter)
    }
}

printLetters()