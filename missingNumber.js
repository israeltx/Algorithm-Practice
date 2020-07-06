// Version 1
// function missingNumber(arr) {
//     arr.sort((a,b) =>
//         { return a-b } 
//     )

//     let value = 0
//     let result = 0

//     for (let i=0; i < arr.length; i++) {
//         if (arr[i + 1] - arr[i] > 1) {
//             value = arr[i + 1] - arr[i]
//             result = arr[i] + 1
//         }
//     }

//     console.log(result);
// }

// Version 2
function missingNumber(arr) {
    arr.sort((a,b) =>
        { return a-b } 
    )

    for (let i=0; i < arr.length; i++) {
        if ( i !== arr[i]) {
            return console.log(i);
        }
    }

}

missingNumber([0, 3, 5, 8, 4, 6, 1, 9, 7])
missingNumber([1, 2, 5, 0, 6, 7, 9, 3, 4])