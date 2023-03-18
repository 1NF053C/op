function endsWithPolyfill() {
    document.write(endsWith('Hello.', 'o') + "<br>"); // false
    document.write(endsWith('Hellooo', 'ooo'));       // true
}

function endsWith(str, substr) {
    return substr === str.slice(-substr.length);
}
