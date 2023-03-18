function fromCamelCase() {
    let s = 'helloWorld';
    let result = getWords(s);
    document.write(result.join(', '));
    document.write('<br>');

    let s2 = 'theHTMLElement';
    let result2 = getWords(s2);
    document.write(result2.join(', '))
}

function getWords(str) {
    if (str === '') {
        return [];
    }
    let words = [];
    let lastIndex = 0;
    for (let i = 1; i < str.length; i++) {
        if (
            str[i] === str[i].toUpperCase() &&
            (
                str[i - 1] === str[i - 1].toLowerCase() ||
                str[i + 1] === str[i + 1].toLowerCase()
            )
        ) {
            words.push(str.slice(lastIndex, i))
            lastIndex = i;
        }
    }
    words.push(str.slice(lastIndex))

    return words;
}
