function mouse(){
    document.addEventListener('mousedown', handleDocumentMousedown);
    document.addEventListener('mousemove', handleDocumentMousemove);
    document.addEventListener('mouseup', handleDocumentMouseup);
}

function handleDocumentMousedown(e){
    let x = e.clientX;
    let y = e.clientY;
    createCircle(x, y);
}

function createCircle(x, y){
    let div = document.createElement('div');
    div.id = "mouse-highlight"
    div.style.position = 'absolute';
    div.style.left = x - 10 + 'px';
    div.style.top = y - 10 + 'px';
    div.style.height = '20px';
    div.style.width = '20px';
    div.style.borderRadius = '100%';
    div.style.backgroundColor = 'blue';
    document.body.appendChild(div);
}

function handleDocumentMousemove(e){
    let x = e.clientX;
    let y = e.clientY;
    moveCircle(x, y);
}

function moveCircle(x, y){
    let div = document.querySelector('#mouse-highlight');
    div.style.left = x - 10 + 'px';
    div.style.top = y - 10 + 'px';
}

function handleDocumentMouseup(e){
    let div = document.querySelector('#mouse-highlight');
    document.body.removeChild(div);
}
