function binToHex() {
    let bin = "11111110110";
    let hex = toHex(bin);
    document.write(hex);
}

function toHex(bin) {
    return `0x${parseInt(bin, 2).toString(16)}`;
}

/************************************
 * examples that don't rely on helper methods:
 * **********************************/
function toHexWithoutParseInt(bin) {
    let dec = toDecimalWithoutParseInt(bin);
    let result = '';
    let r;
    while(dec > 0) {                    
        r = dec % 16;
        result = digitAsHex(r) + result;                   
        dec = Math.floor(dec / 16);
    }
    return `0x${result}`
}

function toDecimalWithoutParseInt(bin) { // NOTE: "10" becomes 2, not 10
    let result = 0;
    for(let i = 0; i < bin.length; i++){
        result += bin[bin.length - i - 1] * (2 ** i);
    }
    return result;
}

function digitAsHex(d) {
    return d < 10 ? '' + d : ['A', 'B', 'C', 'D', 'E', 'F'][d - 10];
}
