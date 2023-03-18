function factorial(){
    let result = getFactorial(7);
    document.write(result);
}

function getFactorial(n){
    if(typeof n !== 'number'){
        return null;
    }

    if(n === 0){
        return 1;
    }

    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}
