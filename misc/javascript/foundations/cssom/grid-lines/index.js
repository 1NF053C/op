(function(){
    let elem = document.querySelector('#d1');
    createGrid(elem, 6, false);

    function createGrid(element, gap = 10, thickLines = false){
        validateInput(element, gap, thickLines);
        const elemStyle = getComputedStyle(element);
        const frag = document.createDocumentFragment();
        const lineWidth = thickLines ? '2px' : '1px';

        // vertical lines
        const numGrayLines = Math.floor((parseInt(elemStyle.width)) / parseInt(gap));
        for(let i=0; i<numGrayLines; i++){
            const line = document.createElement('div');
            line.style.position = 'absolute';
            if(i % 5 === 0){
                line.style.backgroundColor = '#aaa';
                line.style.zIndex = 1;
            }
            else {
                line.style.backgroundColor = '#ddd';
            }
            line.style.width = lineWidth;
            line.style.left = (i * gap - parseInt(lineWidth) / 2) + 'px';
            line.style.height = elemStyle.height;
            frag.appendChild(line);
        }

        // horizontal lines
        for(let i=0; i<numGrayLines; i++){
            const line = document.createElement('div');
            line.style.imageRendering = 'pixelated'
            line.style.position = 'absolute';
            line.style.backgroundColor = i % 5 === 0 ? '#aaa' : '#ddd';
            line.style.width = elemStyle.width;
            line.style.height = lineWidth; 
            line.style.top = (i * gap - parseInt(lineWidth) / 2) + 'px';
            frag.appendChild(line);
        }

        const verticalCenterLine = document.createElement('div');
        verticalCenterLine.style.position = 'absolute';
        verticalCenterLine.style.zIndex = 2;
        verticalCenterLine.style.backgroundColor = 'black';
        verticalCenterLine.style.width = lineWidth;
        verticalCenterLine.style.height = elemStyle.height;
        verticalCenterLine.style.marginLeft = ((parseInt(elemStyle.width) / 2) - (parseInt(lineWidth) / 2)) + 'px';
        frag.appendChild(verticalCenterLine);

        const horizontalCenterLine = document.createElement('div');
        horizontalCenterLine.style.position = 'absolute';
        horizontalCenterLine.style.zIndex = 2;
        horizontalCenterLine.style.backgroundColor = 'black';
        horizontalCenterLine.style.width = elemStyle.width;
        horizontalCenterLine.style.height = lineWidth;
        horizontalCenterLine.style.marginTop = ((parseInt(elemStyle.width) / 2) - (parseInt(lineWidth) / 2)) + 'px';
        frag.appendChild(horizontalCenterLine);

        elem.appendChild(frag);
    }

    function validateInput(element, gap, thickLines){
        if(!(element instanceof Node)){
            throw TypeError("createGrid's element arg should be an Element Node. Received type: " + typeof element);
        }
        if(isNaN(gap)){
            throw TypeError("createGrid's gap arg should be a Number. Received type: " + typeof gap);
        }
        if(gap < 5 || gap > 100){
            throw TypeError("createGrid's gap value should be > 5 and < 100. Received: " + gap);
        }
        if(typeof thickLines !== 'boolean'){
            throw TypeError("createGrid's thickLines arg should be a boolean. Received type: " + thickLines);
        }
    }
})();

