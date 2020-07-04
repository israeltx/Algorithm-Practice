function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('fizzbuzz');
    } else if (num % 3 === 0) {
        console.log('fizz');
    } else if (num % 5 === 0) {
        console.log('buzz');
    } else {
        console.log('none');
    }
}

fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(4)
fizzBuzz(15)