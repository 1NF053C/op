function arrToOl(){
    let input = ["One", "Two", "Three"]
    let olHtml = createOrderedList(input);
    document.write(olHtml);
}

function createOrderedList(arr) {
    return `<ol>${arr.map(toListItem).join('')}</ol>`
    // the .join(_) call is necessary to correctly form a string of <li>'s
    // without it, the resulting array from arr.map(_) call would be stringified and leave some extraneous text in the string, like commas 
}

function toListItem(e){
    return `<li>${e}</li>`
}
