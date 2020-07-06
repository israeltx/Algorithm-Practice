function isValidTime(str) {
    const hourAndMinute = str.split(':')

    const result = Number( hourAndMinute[0] ) > 23 || Number( hourAndMinute[1] ) > 59 ? false : true

    console.log(result);
}

isValidTime('24:00')
isValidTime('23:31')
isValidTime('22:00')
isValidTime('22:60')