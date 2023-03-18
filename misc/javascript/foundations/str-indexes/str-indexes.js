function strIndexes(){
    let input = 'Hello World!';
    let result = getAllIndexes(input, 'l')
    document.write(result);
}

function getAllIndexes(str, substr){
    let i = str.indexOf(substr);
    let indexes = [];
    if(i === -1){
        return -1;
    }
    while(i > -1){
        indexes.push(i);
        i = str.indexOf(substr, i + 1);
    }
    return indexes;
}
