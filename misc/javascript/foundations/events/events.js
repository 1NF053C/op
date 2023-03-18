function events(){
    const elem = document.querySelector('.counter');
    new Counter(elem);
}

/**
 * This demonstrates the traditional javascript approach for creating classes
 * Beginners often get tripped up with this "bind" usage.
 * Handlers need to be attached using "bind"
 *   so that the "this" reference withint them refers
 *   to the obj instance instead of the TargetElement that is clicked
 * This nuance comes up in certain React.js code as well, although there are ways to avoid it
 * (One way to avoid needing to bind to a new "this" is to use the class style syntax with "method definitions")
 */
function Counter(element){
    this.count = 0;
    const displayElement = document.createElement('div');
    displayElement.textContent = this.count;
    element.appendChild(displayElement);
    this.displayElement = displayElement;

    const inc = document.createElement('button');
    inc.textContent = '+';
    inc.onclick = this.increment.bind(this);
    element.appendChild(inc);

    const dec = document.createElement('button');
    dec.textContent = '-'
    dec.onclick = this.decrement.bind(this);
    element.appendChild(dec);

    const reset = document.createElement('button');
    reset.textContent = 'Reset';
    reset.onclick = this.reset.bind(this);
    element.appendChild(reset);
}

Counter.prototype.updateDisplay = function(){
    this.displayElement.textContent = this.count;
}

Counter.prototype.increment = function(){
    this.count++;
    this.updateDisplay();
}

Counter.prototype.decrement = function(){
    if(this.count > 0){
        this.count--;
        this.updateDisplay();
    }
}

Counter.prototype.reset = function(){
    this.count = 0;
    this.updateDisplay();
}

/**
 * alert if a click happened within any div
 */
window.onclick = function(e){
    let cur = e.target;
    while(cur.nodeName !== 'DIV' && cur.parentElement !== null){
        cur = cur.parentElement;
    }
    if(cur.tagName === 'DIV'){
        alert('div was clicked!')
    }
}
