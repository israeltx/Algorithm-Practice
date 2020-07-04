// Methods solution
// function reverseString(str) {
//     let reverse = str.split('').reverse().join('')
//     console.log(reverse);
// }

// For loop solution
function reverseString(str) {
    let reverse = []
    for (let i = str.length; i > 0; i--){
        reverse.push(str[i])
    }
    console.log(reverse.join(''));
}


reverseString('codegod')
reverseString('javascript')