function splitStrings(){
    let input = 'a|b|c';
    let result = stringSplitSingleDelim(input, '|');
    document.write(result);
    document.write('<br>----<br>')
    let input2 = 'a||b|c||e';
    let result2 = stringSplit(input2, '||');
    document.write(result2);
}

function stringSplit(str, delim){ // delim can be multi-char
    let elems = [];
    let lastIndex = 0;
    for(let i = 0; i < str.length; i++){
        let sub = str.slice(i, i + delim.length);
        if(sub === delim){
            elems.push(str.slice(lastIndex, i));
            lastIndex = i += delim.length;
        }
    }
    elems.push(str.slice(lastIndex))
    return elems;
}

function stringSplitSingleDelim(str, delim){ // delim must be single char
    if(delim.length !== 1){
        return null;
    }
    let elems = [];
    let lastIndex = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === delim){
            elems.push(str.slice(lastIndex, i));
            lastIndex = i + 1;
        }
    }
    elems.push(str.slice(lastIndex))
    return elems;
}
