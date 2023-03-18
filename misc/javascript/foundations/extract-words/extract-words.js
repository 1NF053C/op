function extractWords(){
    let str = getInput();
    let words = getWords(str);
    write(words);
}

function getInput(){
    let input;
    while(true){
        input = prompt('Enter a hyphenated word:');
        if(input.indexOf('-') === -1){
            alert('Invalid input!');
        }
        else{
            return input;
        }
    }
}

function getWords(str){
    return str.split('-');
}

function write(words){
    words.forEach(word => document.write(word + '<br>'))
}
