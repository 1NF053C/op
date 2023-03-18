function domNodes(){
    let result = document.getNodeCount();
    document.write('NodeCount: ' + result);
}

/**
 * element nodes return concatenation of all child nodes textContent minus comment nodes
 * text nodes return nodeValue
 * comment nodes return nodeValue
 */
Object.defineProperty(Node.prototype, 'textContent', {
    get: function() {
        let nodeType = this.nodeType;

        if (nodeType === Node.TEXT_NODE || nodeType === Node.COMMENT_NODE){
            return this.nodeValue;
        }
        else if(nodeType === Node.ELEMENT_NODE){
            let text = '';
            let childNodes = this.childNodes;

            let len = childNodes.length;
            for(let i=0; i<len; i++){
                if(childNodes[i].nodeType !== Node.COMMENT_NODE){
                    text += childNodes[i].textContent;
                }
            }
            return text;
        }
    },
    set: function(value) {
        let nodeType = this.nodeType;

        if(nodeType === Node.TEXT_NODE || nodeType === Node.COMMENT_NODE){
            this.nodeValue = value;
        }
        else if (nodeType === Node.ELEMENT_NODE){
            while(this.firstChild){
                this.removeChild(this.firstChild);
            }
            if(value === ''){
                this.appendChild(document.createTextNode(value));
            }
        }
    }
});

/**
 * exercise: refine replaceChild using only insertBefore and removeChild methods
 * replaces a given node with another node in the document.
 */
Node.prototype.replaceChild = function(newNode, nodeToReplace){
    this.insertBefore(newNode, nodeToReplace);
    this.removeChild(nodeToReplace);
}

/**
 * Returns the node count of each of its children plus itself
 */
Node.prototype.getNodeCount = function(){
    let childNodes = this.childNodes;
    if(childNodes.length === 0){
        return 1;
    }
    else {
        let sum = 1;
        this.childNodes.forEach(c => {
            sum += c.getNodeCount();
        });
        return sum;
    }
}

Element.prototype.insertAdjacentElement = function(pos, element){
    if(!(element instanceof Element)){
        throw new TypeError('Invalid second argument provided. It must implement the Element interface.');
    }
    
    switch(pos){
        case 'beforebegin':
            // insert element before this node
            this.parentNode.insertBefore(element, this);
            break;
        case 'afterbegin':
            // first child, insert before the existing first child
            this.insertBefore(element, this.childNodes[0]);
            break;
        case 'beforeend':
            // last child of this node
            this.insertBefore(element, null);
            break;
        case 'afterend':
            // insert after this node (which is the next sibling from perspective of parent)
            this.parentNode.insertBefore(element, this.nextSibling)
            break;
        
        default:
            throw new SyntaxError("Invalid first argument provided. It must be one of the four values: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'.")
    }
}

/**
 * exercise: implement a new firstElementChild method on element using only Node methods (no element methods)
 */
Object.defineProperty(Element.prototype, 'firstElementChild', {
    get: function(){
        let elem = this.firstChild;
        while(elem && !(elem instanceof Element)){
            element = element.firstSibling;
        }
        return element;
    }
});

Object.defineProperty(Element.prototype, 'className', {
    get: function(){
        return this.getAttribute('class');
    },
    set: function(value){
        this.setAttribute('class', value);
    }
});
