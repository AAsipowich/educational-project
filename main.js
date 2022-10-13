function sqareDigits(number) {
    return +Array.from(number.toString(), v => v * v).join('');
    }
    console.log(sqareDigits(9119));
