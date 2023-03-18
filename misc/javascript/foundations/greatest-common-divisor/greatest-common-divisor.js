function greatestCommonDivisor(){
    let result = gcd(10, 20);
    document.write(result);
}

function gcd(a, b){
    if(a === 0 && b === 0){
        return Infinity;
    }
    if(a === 0 || b === 0){
        return a + b;
    }
    let min = Math.min(a, b);
    let cd = 1;
    for(let i = 2; i<=min; i++){
        if(a % i === 0 && b % i === 0){
            cd = i
        }
    }
    return cd;
}
