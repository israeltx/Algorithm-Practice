// Solution 1
// function isDigit(input) {

//     const convertedInput = Number(input)

//     const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//     console.log(numbers.includes(convertedInput))
// }

// Solution 2
function isDigit(input) {
    
    const convertedInput = Number(input)
    console.log(convertedInput >= 0)
}

isDigit('1')
isDigit('3')
isDigit('d')
isDigit('0')