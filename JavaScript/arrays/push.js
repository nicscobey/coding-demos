// adds an item to the end of an array and returns the new length of the array 

let myArray = ['a', 'b', 'c']
console.log(myArray)

myArray.push('d')
console.log(myArray) // returns ['a', 'b', 'c', 'd']

console.log(myArray.push('e')) // returns 5
console.log(myArray)  // returns ['a', 'b', 'c', 'd', 'e']