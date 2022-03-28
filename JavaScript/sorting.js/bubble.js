const myArr = [3,1,4,2, 0, -2, 18, -12]

function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length ; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sortArray(myArr))

