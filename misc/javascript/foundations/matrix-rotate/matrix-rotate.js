function matrixRotate() {
    let input = [[1, 4], [10, 2]];
    document.write(JSON.stringify(rotateBy90(input), null, 2));
}

function rotateBy90(a) {
    let n = a.length;

    let copy = [];

    for (let i = 0; i < n; i++) { // copy
        copy.push([])
        for (let j = 0; j < n; j++) {
            copy[i].push(a[i][j]);
        }
    }

    for (let i = 0; i < n; i++) { // this still modifies original array
        for (let j = 0; j < n; j++) {
            a[i][j] = copy[n - j - 1][i];
        }
    }

    return a;
}
