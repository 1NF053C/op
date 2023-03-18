function errorHandling(){
    let a = 2;
    let b = 4;
    document.write(sum(a, ''));
}

function sum(a, b){
    /**
     * Constraint: allow any values that can be coerced into a number
     * Throw a type error for any type that cannot be coerced into a number
     */
    if(arguments.length !== 2){
        throw TypeError('Expected 2 arguments')
    }
    a = Number(a);
    b = Number(b);
    if(isNaN(a) || isNaN(b)){
        throw TypeError('Both arguments should be of type Number');
    }
    return a + b;
}
