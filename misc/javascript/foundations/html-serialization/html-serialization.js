function htmlSerialization() {
    const elem = document.querySelector('#app');
    console.log(elem.getInnerHTML());
}

Element.prototype.getInnerHTML = function () {
    let htmlStr = '';
    this.childNodes.forEach(child => {
        switch(child.nodeType){
            case Node.ELEMENT_NODE:
                htmlStr += serializeElement(child);
                break;
            case Node.TEXT_NODE:
                htmlStr += child.nodeValue;
                break;
            default:
                htmlStr += `<!-- ${child.nodeValue} -->`;
                break;
        }
    });
    return htmlStr;
}

function serializeElement(node) {
    const tagName = node.tagName.toLowerCase();
    const attributesArray = Array.prototype.slice.call(node.attributes);
    let attributesStr = attributesArray.map(
        (attribute) => attribute.name + '="' + attribute.value + '"'
    ).join(' ');
    attributesStr = attributesStr === '' ? '' : (' ' + attributesStr);
    return `<${tagName}${attributesStr}>${node.getInnerHTML()}</${tagName}>`;
}
