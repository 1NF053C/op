function camelToTitleCase() {
    let input = 'insertHTMLElement'
    document.write(impl(input));
}

function impl(s) {
    if(s === ''){
        return '';
    }
    let words = [];
    let builtLength = 0;
    for (let i = 1; i < s.length; i++) {
        if (
            (isLower(s[i - 1])
                && isUpper(s[i]))
            || (isUpper(s[i])
                && isLower(s[i + 1]))
        ) {
            let slice = s.slice(builtLength, i);
            words.push(slice);
            builtLength += slice.length;
        }
    }
    words[0] = words[0][0].toUpperCase() + words[0].slice(1);
    words.push(s.slice(builtLength));
    return words.join(' ');
}

function isUpper(c) {
    return c.toUpperCase() === c
}

function isLower(c) {
    return c.toLowerCase() === c
}
