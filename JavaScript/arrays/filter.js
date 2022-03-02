// creates an array of elements that match conditions from an existing array. does not modify original array

// let letters = ['a', 'a', 'b', 'c', 'd', 'a', 'e']
// const arrayOfA = letters.filter(letter => letter === 'a')

// console.log(letters) // returns ['a', 'a', 'b', 'c', 'd', 'a', 'e']
// console.log(arrayOfA) // returns ['a', 'a', 'a']


// let numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const greaterThanFive = numbers.filter(number => number > 5)

// console.log(numbers) // returns [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(greaterThanFive) // returns [ 6, 7, 8 ]



let animals = ["cat", "Chicken", "dog", "Pig", "Raccoon"]
let returnValue = animals.filter(
    animal => animal.includes("c")
)
console.log(returnValue)



console.log(animals.filter(
    animal => animal.includes("c")
))