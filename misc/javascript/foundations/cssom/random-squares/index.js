(function () {
    createRandomSquares(5);
    function createRandomSquares(n){
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        for(let i=0; i<n; i++){
            let x = Math.random() * (innerWidth - 100);
            let y = Math.random() * (innerHeight - 100);
            let cloned = elem.cloneNode(true);
            cloned.id = cloned.id.slice(0, cloned.id.length - 1) + (i+2);
            cloned.className = 'square';
            cloned.style.position = 'fixed';
            cloned.style.top = y + 'px';
            cloned.style.left = x + 'px';
            cloned.style.backgroundColor = ['red', 'orange', 'blue', 'green'][(Math.floor(Math.random() * 4))]
            document.body.insertBefore(cloned, elem);
        }
    }
})();
