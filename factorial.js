function factorial(num) {
    let result = 1
    for (let i=2; i<=num; i++) {
        result *= i
    }
    console.log(result);
}

factorial(5)
factorial(4)
factorial(1)
factorial(0)
factorial(10)