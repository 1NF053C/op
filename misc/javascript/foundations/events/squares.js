function squares() {
    document.onmousedown = handleMousedown;
    document.onmousemove = handleMousemove;
    document.onmouseup = handleMouseup;
}

function handleMousedown(e) {
    let x = e.clientX;
    let y = e.clientY;
    beginSquare(x, y);
}

function beginSquare(x, y) {
    let div = document.createElement('div');
    let numSquares = document.querySelectorAll('.square');
    div.id = 'square-' + numSquares.length;
    div.className = 'square active';
    div.style.position = 'absolute';
    div.style.left = x + 'px';
    div.style.top = y + 'px';
    div.style.width = '10px';
    div.style.height = '10px';
    div.style.backgroundColor = 'blue';
    div.setAttribute('data-x', x);
    div.setAttribute('data-y', y);
    document.body.appendChild(div);
}

function handleMousemove(e) {
    let x = e.clientX;
    let y = e.clientY;
    resizeSquare(x, y);
}

function resizeSquare(x, y) {
    let div = document.querySelector('.square.active');
    if (div) {
        let originX = div.dataset.x;
        let originY = div.dataset.y;
        let newWidth = (x - parseInt(originX));
        let newHeight = (y - parseInt(originY));
        if(newWidth < 0){
            newWidth = Math.abs(newWidth);
            div.style.left = (parseInt(originX) - newWidth) + 'px';
            div.style.width = newWidth + 'px';
        }
        if(newHeight < 0){
            newHeight = Math.abs(newHeight);
            div.style.top = (parseInt(originY) - newHeight) + 'px';
            div.style.height = newHeight + 'px';
        }
        div.style.width = newWidth + 'px';
        div.style.height = newHeight + 'px';
    }
}

function handleMouseup(e) {
    let div = document.querySelector('.square.active');
    div.className = 'square';
}
