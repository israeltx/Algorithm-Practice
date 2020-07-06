function longestLength(phrase) {
    let phraseToArray = phrase.split(' ')
    let longestWord = ''

    for (let i = 0; i < phraseToArray.length; i++) {
        if (phraseToArray[i].length > longestWord.length) {
            longestWord = phraseToArray[i]
        }
    }

    console.log(longestWord, longestWord.length);
}

longestLength('I am a coding god')
longestLength('I would like to work for Google')
longestLength("Ain't no fun if the homie don't code none")
longestLength('')