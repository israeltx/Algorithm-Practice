function longestWord(phrase) {
    // All special chars but space
    const specialChar = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', "\\", '/', ':', ';', '"', "'", '<', '>', ',', '?', '.']

    let phraseAsArray = phrase.split('')

    // Cleaning the array
    phraseAsArray.forEach((letter, i) => {
        if (specialChar.includes(letter)) {
            phraseAsArray[i] = ''
        }
    });

    let cleanArray = phraseAsArray.join('').split(' ')

    cleanArray.sort( (a,b) => {
        return b.length - a.length
    })
    
    console.log(cleanArray[0]);

}

longestWord('Ready, steady, go!')
longestWord('Ready[[[, steady, go!')
longestWord('ABCd')