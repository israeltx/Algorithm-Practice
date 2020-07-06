function idDuplicatedNumber(arr) {
    arr.sort( (a,b) => {
        return a - b
    })

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            return console.log(true);
        } else {
            return console.log(false);
        }
    }
    
}

idDuplicatedNumber([1, 2, 3, 1])
idDuplicatedNumber([3, 1])
idDuplicatedNumber([0, 4, 5, 0, 3, 6])