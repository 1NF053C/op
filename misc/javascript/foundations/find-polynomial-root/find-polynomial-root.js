function findPolynomialRoot(){
    let f = (x) => (x ** 2 + 2 * x - 15);
    let result = bisection(f, 2, 10);
    document.write(result);
}

function bisection(f, start, end){
    const epsilon = 0.0001; // TODO
    let startValue = f(start);
    let endValue = f(end);

    if(startValue === 0){
        return start;
    }

    if(endValue === 0){
        return end;
    }
    
    let change = isSignChange(startValue, endValue);

    if (!change) {
        return null;
    }

    let mid = ((start + end) / 2);

    if(Math.abs(start - end) <= epsilon){
        return mid;
    }

    let midValue = f(mid);

    if(midValue === 0){
        return mid;
    }
    else if(isSignChange(startValue, midValue)){
        return bisection(f, start, mid);
    }
    else {
        return bisection(f, mid, end);
    }
}

function isSignChange(startValue, endValue){
    return !(startValue * endValue > 0)
}