function filter(){
    let evens = [1,2,3,4,5,6,7].filter(isEven);
    document.write('evens: ', evens);
}

function isEven(n){
    return n % 2 === 0
}
