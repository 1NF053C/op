function linearSearch(){
    let result1 = search([1, 2, 3], 2);
    document.write(result1);
    document.write('<br>');

    let result2 = search([1, 2, 3], '2');
    document.write(result2);
}

function search(arr, target){
    return arr.findIndex((v) => v === target) !== -1
}
