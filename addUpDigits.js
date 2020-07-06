function addUpDigits(num) {
    const numStrArr = num.toString().split('')
    let numbers = []
    
    numStrArr.forEach(str => {
        numbers.push(Number(str))
    });

    console.log(numbers.reduce((acc, num) => acc + num))
}

addUpDigits(29)
addUpDigits(48)