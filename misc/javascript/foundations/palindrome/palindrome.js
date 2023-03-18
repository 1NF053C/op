function palindrome(){
    let str = getInput();
    let result = isPalindrome(str);
    writeResult(str, result);
}

function getInput(){
    return prompt('Enter a word')
}

function isPalindrome(str) {
    if(typeof str !== 'string'){
        return false;
    }

    if(str.length === 0){
        return false;
    }

    if(str.length === 1){
        return true;
    }

    let mismatchFound = false;
    for(let i = 0; i < str.length / 2 && !mismatchFound; i++){
        if(str[i] !== str[str.length - i - 1]){
            mismatchFound = true;
        }
    }
    return !mismatchFound
}

function writeResult(str, isPalindrome){
    if(isPalindrome){
        document.write(`Yes, ${str} is a palindrome.`);
    }
    else {
        document.write(`No, ${str ? str : `\"\"` } is not a Palindrome.`);
    }
}
