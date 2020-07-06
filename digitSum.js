function digitSum(str) {
    const strAsArray = str.split(' ')
   
    let result = 0

    strAsArray.forEach(e => {
        if (Number(e) >= 0 ) {
            result += Number(e)
        }
    });

    console.log(result);
}

digitSum('2 apples, 12 oranges')
digitSum('123450')
digitSum('Your payment method is invalid')