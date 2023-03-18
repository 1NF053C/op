function recursiveGcd(){
    let result = gcd(30, 14);
    document.write(result);
}

function gcd(a, b){
    let r = a % b;
    if(r === 0) return b;
    else return gcd(b, a % b);
}
