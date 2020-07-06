function titleCase (phrase) {
    let phraseAsArray = phrase.split(' ')
    let capitalized = []

    phraseAsArray.forEach( word => 

        capitalized.push( word.charAt(0).toUpperCase() + word.slice( 1, word.length )))
        
    console.log(capitalized.join(' '));
}

titleCase('I love javascript')
titleCase('I am the one who knocks')