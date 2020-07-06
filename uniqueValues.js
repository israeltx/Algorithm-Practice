function uniqueValues(arr1, arr2) {
    let unique = []

    for (val of arr1) {
        if(!arr2.includes(val) && !unique.includes(val)) [
            unique.push(val)
        ]
    }

    for (val of arr2) {
        if(!arr1.includes(val) && !unique.includes(val)) [
            unique.push(val)
        ]
    }

    console.log(unique);
}

uniqueValues([1,2,3,5], [1,2,3,4,5])
uniqueValues([1, 'calf', 3, 'piglet'], [7, 'filly'])
uniqueValues([2, 1, 3], [3, 2, 1])