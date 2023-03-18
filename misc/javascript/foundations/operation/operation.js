function operation() {
    let [x, y, op] = getInput();
    let [result, sym] = performOperation(x, y, op);
    writeCalc(x, sym, y, result);
}

function getInput() {
    return [
        prompt('x = ?'),
        prompt('y = ?'),
    ].map(Number).concat([
        prompt('op = ?')
    ])
}

function performOperation(a, b, op) {
    switch (op) {
        case 'a': return [a + b, '+'];
        case 's': return [a - b, '-'];
        case 'm': return [a * b, '*'];
        case 'd': return [a / b, '/'];
        case 'e': return [a ** b, '**'];
        case 'r': return [a % b, '%'];
        default: return [null, null];
    }
}

function writeCalc(x, sym, y, result) {
    if (sym === null) {
        document.write('Unknown operation')
    }
    else {
        document.write(`${x} ${sym} ${y} = ${result}`);
    }
}
