function reverseArray(){
   let nums = [1, 5, 9];
   document.write(JSON.stringify(nums) + ' reversed is [' + impl(nums) + ']');
}

// constraint: don't use Array.reverse()
function impl(arr){
    let temp, rightSideIndex;
    let n = arr.length;
    let mid = n / 2;

    for(let i = 0; i < mid; i++){
        rightSideIndex = arr.length - 1 - i;
        temp = arr[i];
        arr[i] = arr[rightSideIndex];
        arr[rightSideIndex] = temp;
    }
    return arr;
}
