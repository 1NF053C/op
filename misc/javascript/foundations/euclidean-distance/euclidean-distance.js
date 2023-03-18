function euclideanDistance(){
    let A = [0, 0];
    let B = [30, 5];
    let C = [8, 8];
    let D = [-5, -10];

    let distFromOrigin = getDistanceCalculator(A);
    document.write(distFromOrigin(B));
    document.write('<br>');
    document.write(distFromOrigin(C));
    document.write('<br>');
    document.write(distFromOrigin(D));
    document.write('<br>');
}

function getDistanceCalculator(A){
    return (B) => Math.sqrt((A[0] - B[0]) ** 2 + (A[1] - B[1]) ** 2)
}

