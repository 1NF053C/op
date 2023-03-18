function findMinNumber() {
    let nums = [5, 2, 9, 7];
    let minNum = min(nums);
    writeCalc(nums, minNum);
}

function min(arr) {
    if (arr.length === 0) {
        return Infinity
    }

    return arr.reduce((prev, cur) => {
        return cur < prev ? cur : prev;
    })
}

function writeCalc(arr, minNum){
    document.write(`min([${arr.map(v => ' ' + v)} ]) = ${minNum}`);
}
