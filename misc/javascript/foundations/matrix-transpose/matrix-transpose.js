function matrixTranspose() {
    let input = [[1, 4], [10, 2]];
    document.write(JSON.stringify(transpose(input), null, 2));
}

function transpose(a) {
    let n = a.length;

    let temp;
    for (let i = 0; i < n-1; i++) {
        for (let j = i+1; j < n; j++) {
            temp = a[i][j];
            a[i][j] = a[j][i];
            a[j][i] = temp;
        }
    }

    return a;
}
