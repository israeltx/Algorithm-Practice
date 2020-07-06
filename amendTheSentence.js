function amendTheSentence(str) {
    let strAsArray = str.split('')

    for (let i = 0; i < strAsArray.length; i++) {
        if (strAsArray[i] !== strAsArray[i].toLowerCase()) {
            strAsArray[i] = strAsArray[i].toLowerCase()
            strAsArray.splice(i, 0, ' ')
        }
    }

    strAsArray = strAsArray.join('').trim()
    console.log(strAsArray);
}

amendTheSentence('CodingGodDoesWorkSon')
amendTheSentence("Ain'tNoFunIfTheHomieDon'tCodeNone")