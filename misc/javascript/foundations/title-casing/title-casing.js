function titleCasing() {
    let result = toTitleCase('this Is gOod.');
    document.write(result);
}

function toTitleCase(str){
    return getWords(str)
           .map(w => w[0].toUpperCase() + w.slice(1).toLowerCase())
           .join(' ');
}

function getWords(str){
    return str.split(' ');
}
