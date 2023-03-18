/**
 * The method MUST accept a variable number of arguments.
 * If an argument is not a Node instance, it MUST be coerced into a string.
 * The given nodes MUST be inserted into the DOM, all at once.
 */
Element.prototype.append = function(...args){
    const frag = document.createDocumentFragment();
    args.forEach(arg => {
        if(arg instanceof Node){
            frag.appendChild(arg);
        }
        else {
            arg = String(arg);
            frag.appendChild(document.createTextNode(arg));
        }
    });
    this.appendChild(frag);
}
