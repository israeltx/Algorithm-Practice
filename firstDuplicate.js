function firstDuplicate(arr) {

    for (let i = 0; i <= arr.length -1; i++) {
        if (arr[i] === arr[i + 1]) {
            return console.log(arr[i]);
        }
    }
    
    return console.log(-1);
    
}

firstDuplicate([2, 3, 3, 1, 5, 2])
firstDuplicate([2, 2])
firstDuplicate([2, 1, 3])