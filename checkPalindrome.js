// RegEx Solution
// function checkPalindrom(str) {
//     let cleanStr = str.toLowerCase().replace(/[\W_]/g, '')
//     let reversedStr = cleanStr.split('').reverse().join('')

//     console.log(cleanStr === reversedStr);

// }

// No RegEx solution
const specialChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', "\\", '/', ':', ';', '"', "'", '<', '>', ',', '?', ' ', '.']

function checkPalindrom(str) {
    let strToArray = str.toLowerCase().split('')
    
    for (let i=0; i <= strToArray.length; i++) {
        for (let j=0; j < specialChar.length; j++) {
            if (strToArray[i] === specialChar[j]) {
                strToArray[i] = ''
            }
        }
    }

    let clearStr = strToArray.join('')
    let reverseStr = clearStr.split('').reverse().join('')

    console.log(clearStr === reverseStr);
}



checkPalindrom('A man, a plan, a canal. Panama')
checkPalindrom('My age is 0, 0 si ega ym')
checkPalindrom('_codegod')
checkPalindrom('legendary')
checkPalindrom('.O_O (:/-\:) O_O.')
checkPalindrom('arara')