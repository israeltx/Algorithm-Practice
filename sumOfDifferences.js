function sumOfDifferences(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)
    
    let result = 0

    for (let i = min; i <= max; i++) {
        result += i
    }
    
    console.log(result);
}

sumOfDifferences([10, 5])
sumOfDifferences([3, 7])