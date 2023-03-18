function bitwiseNot() {
    let bin = '1100101';
    let result = not(bin);
    document.write(bin);
    document.write('<br>');
    document.write(result);
}

function not(bin) {
    let reversed = ''
    for(let i = 0; i < bin.length; i++){
        reversed += (bin[i] === '0' ? '1' : '0');
    }
    return reversed;
}
