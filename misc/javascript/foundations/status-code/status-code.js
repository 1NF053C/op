function statusCode(){
    let s = getInput();
    let result = getStatusCodeClass(s);
    document.write(result);
}

function getInput(){
    let input;
    while(true){
        input = prompt('status code = ?');
        if(input.length !== 3){
            alert('Invalid code length')
        }
        else if(isNaN(Number(input))){
            alert('Each char must be a digit')
        }
        else if(input[0] < 1 || input[0] > 5) {
            alert('First digit not in range 1-5')
        }
        else {
            return input;
        }
    }
}

function getStatusCodeClass(str){
    switch(str[0]){
        case '1': return 'Informational';
        case '2': return 'Successful';
        case '3': return 'Redirection';
        case '4': return 'Client Error';
        case '5': return 'Server Error';
    }
}
