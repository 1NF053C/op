/**
 * demonstrates features of SquareMatrix class and writes results to document
 */
function squareMatrix(){
    let a = new SquareMatrix([
        [1,2],
        [4,3]
    ]);
    let b = new SquareMatrix([
        [5,6],
        [8,7]
    ]);

    let c = a.add(b);
    let d = a.multiply(b);
    
    a.rotateBy90();

    document.write(JSON.stringify(c));
    document.write('<br>');
    document.write(JSON.stringify(d));
    document.write('<br>');
    document.write(JSON.stringify(a));

    a.transpose();
    document.write('<br>');
    document.write(JSON.stringify(a));
}

function SquareMatrix(n){
    if(typeof n === 'integer'){
        this.array = []
        for(let i=0; i<arr.length; i++){
            this.array.push([]);
            for(let j=0; j<arr.length; j++){
                this.array[i].push([0])
            }
        }
        this.n = n;
    }
    else if(Array.isArray(n)){
        this.array = n;
        this.n = n.length;
    }
    else {
        console.error('SquareMatrix constructor expects argument of type integer or Array')
    }
}

/**
 * returns a new Square Matrix instance that is 
 * the sum of this and m
 * @param {SquareMatrix} m 
 */
SquareMatrix.prototype.add = function(m){
    let a = this.array;
    let b = m.array;
    let copy = [];
    for(let i=0; i<this.n; i++){
        copy.push([]);
        for(let j=0; j<this.n; j++){
            copy[i].push(a[i][j] + b[i][j]);
        }
    }
    return new SquareMatrix(copy);
}

/**
 * returns a new SquareMatrix that is
 * the multiple of this and m
 * @param {SquareMatrix} m 
 */
SquareMatrix.prototype.multiply = function(m){
    let a = this.array;
    let b = m.array;
    let copy = [];
    for(let i=0; i<this.n; i++){
        copy.push([]);
        for(let j=0; j<this.n; j++){
            let sum = 0;
            for(let k=0; k<this.n; k++){
                sum += a[i][k] * b[k][j];
            }
            copy[i].push(sum);
        }
    }
    return new SquareMatrix(copy);
}

/**
 * returns a new SquareMatrix that is a copy of this
 */
SquareMatrix.prototype.copy = function(){
    let a = this.array;
    let copy = [];
    for(let i=0; i<this.n; i++){
        copy.push([]);
        for(let j=0; j<this.n; j++){
            copy[i].push(a[i][j])
        }
    }
    return new SquareMatrix(copy);
}

/**
 * initialize every cell of this matrix with v
 * @param {Number} v 
 */
SquareMatrix.prototype.fill = function(v){
    let a = this.array;
    let n = a.length;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            a[i][j] = v;
        }
    }
}

/**
 * rotates this matrix by 90 degrees, in-place
 */
SquareMatrix.prototype.rotateBy90 = function(){
    let a = this.array;
    let n = this.n;
    let copy = this.copy().array;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            a[i][j] = copy[n - j - 1][i];
        }
    }
}

/**
 * transposes this matrix, in-place
 */
SquareMatrix.prototype.transpose = function(){
    let a = this.array;
    let n = this.n;
    for(let i=0; i<n-1; i++){
        let temp;
        for(let j=i+1; j<n; j++){
            temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }
}
