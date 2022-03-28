//THIS FUNCTION WORKS, BUT I DON'T THINK IT'S A CORRECT DEMO OF INSERT BECAUSE IT DOESN'T SEEM TO MOVE THE TARGET NUMBER CORRECTLY

const myArr = [3,1,4,2, 0, -2, 18, -12]

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        let k = 0
        for (let j = 1; j < arr.length; j++) {
            if (arr[k] > arr[j]) {
                let temp = arr[k]
                arr[k] = arr[j]
                arr[j] = temp 
            } 
            console.log('HIHIHIHI', arr)
            k++
        }
    }
    return arr
}

console.log(sortArray(myArr))



// function sortArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i+1; arr[j] < arr[j-1]; j--) {
            
//         }
//     }
//     return arr
// }

// console.log(sortArray(myArr))