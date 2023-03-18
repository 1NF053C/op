function twoSum(){
    let [a, b] = promptForNumberInput();
    writeSum(a, b);
}

function promptForNumberInput(){
    let a = Number(prompt('a = ?'));
    let b = Number(prompt('b = ?'));
    return [a, b];
}

function writeSum(x, y){
    document.write("The sum is: " + (x + y));
}
