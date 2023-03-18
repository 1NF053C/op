function collatzConjecture(){
    let a = impl(3);
    let b = impl(17);
    let results = [
        a, 'length: ' + a.length,
        b, 'length: ' + b.length,    ]
    document.write(JSON.stringify(results, null, 2))
}

function impl(n){
    if(typeof n !== 'number' || isNaN(n) || !isFinite(n)
        || parseInt(n) !== n || n < 1){
            return null;
    }
    let next = n;
    let results = [next];
    while(next !== 1){
        next = next % 2 === 0 ? (next / 2) : (3*next + 1);
        results.push(next);
    }
    return results
}
