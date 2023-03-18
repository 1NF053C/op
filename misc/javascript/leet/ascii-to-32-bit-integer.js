/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.trimStart();
    if((s[0] > '9' || s[0] < '0') && s[0] !== '-' && s[0] !== '+'){
        return 0
    }
    let n = s.length;
    if(n === 0){
        return 0;
    }
    let i = 0;
    let sign;
    if(s[i] === '-' || s[i] === '+'){
        sign = s[i];
        i++;
    }
    let digitStartIndex = i;
    while(s[i] >= '0' && s[i] <= '9' && i !== n){
        i++;
    }
    // assuming using parseInt(_) or Number(_) is forbidden here
    let num = 0;                                
    let digitsLength = i - digitStartIndex;
    if(digitsLength === 0){
        return 0;
    }
    let tens = 1;
    for(let j=0; j<digitsLength; j++){
        num += (s.charCodeAt(digitStartIndex + digitsLength - 1 - j) - 48) * tens;
        tens *= 10;
    }
    if(sign === '-'){
        num *= -1;
    }
    let upperBound = (2 ** 31) - 1;
    let lowerBound = -(2 ** 31);

    if(num < lowerBound){
        num = lowerBound;
    }
    else if(num > upperBound){
        num = upperBound;
    }
    return num;
};
