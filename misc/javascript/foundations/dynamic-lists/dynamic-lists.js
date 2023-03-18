function dynamicLists(){
    const ols = document.querySelectorAll('ol');
    ols.forEach(ol => {
        ol.dataset.list.split('|').forEach(text => {
            const li = document.createElement('li');
            li.textContent = text;
            ol.appendChild(li);
        });
    });
}
