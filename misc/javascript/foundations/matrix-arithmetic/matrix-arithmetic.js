function matrixArithmetic() {
    let a = [
        [1, 3],
        [0, 0]
    ];
    let b = [
        [0, 3],
        [1, 5]
    ];
    let summed = sum(a, b);

    let c = [
        [1, 2],
        [3, 4]
    ];
    let d = [
        [5, 6],
        [7, 8]
    ];
    let product = multiply(c, d);
    document.write(`${JSON.stringify(summed, null, 2)} <br> ${JSON.stringify(product, null, 2)}`);
}

function sum(a, b){
    if(a.length !== b.length){
        return null;
    }
    let result = new Array(a.length);
    for(let i = 0; i < a.length; i++){   // for each row
        result[i] = [];
        for(let j = 0; j<a.length; j++){      // for each column
            result[i].push(a[i][j] + b[i][j]) // push the sum of cells as ith and jth position in a and b into the ith row of result
        }
    }
    return result;
}

function multiply(a, b){
    let result = [];
    let m = a.length;    // num rows in a
    let n = a[0].length; // num cols in a
    let p = b[0].length; // num cols in b (note: this should equal n)
    if(n !== p){
        return null;
    }
    for(let i = 0; i < m; i++){
        result[i] = [];
        for(let j = 0; j < p; j++){
            let sum = 0;
            for(let k = 0; k < n; k++){
                sum += a[i][k] * b[k][j];
            }
            result[i].push(sum);
        }
    }
    return result;
}
