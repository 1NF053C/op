function betterPrecision(){
    let res = toPrecision(124, 1);
    document.write(res); // 100
    document.write('<br>');
    let b = 389520;
    let res2 = toPrecision(b, 4);
    document.write(res2); // 3.895e+5
}

/**
 * for exponents less than 5, just display the normal decimal with zeros instead of exponential notation
 */
function toPrecision(num, precision){
    let str = num.toPrecision(precision);
    let expIndex = str.indexOf('e');
    if(expIndex){
        let exp = Number(str.slice(expIndex + 1));
        if(exp < 5){
            return '' + Number(str);
        }
    }
    return str;
}
