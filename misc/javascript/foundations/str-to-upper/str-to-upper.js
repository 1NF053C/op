function strToUpper() {
    let str = 'Hello World!';
    let result = toUpper(str);
    document.write(result);
}

/* implement function that makes string upper case without using .toUpperCase() */
function toUpper(str) {
    let a_charCode = 'a'.charCodeAt(0);
    let A_charCode = 'A'.charCodeAt(0);
    let diff = a_charCode - A_charCode;
    let result = '';
    for(let i = 0; i < str.length; i++){
        let c = str.charCodeAt(i);
        if(c >= a_charCode) {
            c = str.charCodeAt(i) - diff;
        }
        result += String.fromCharCode(c);
    }
    return result;
}
