const tableHeaderList = (headerStrings) => `<thead><tr>${headerStrings.map(tableHeader).join('')}</tr></thead>`;
const tableHeader  = (str) => `<th>${str}</th>`;
const tableBody  = (rowsStr) => `<tbody>${rowsStr}</tbody>`;
const tableRow = (rowData) => `<tr>${rowData.map(col).join('')}</tr>`;
const col = (str) => `<td>${str}</td>`;

function tables(){
    let languages = [
        {name: 'JavaScript', releaseDate: 1995, fileExtension: '.js', creator: 'Brendan Eich'},
        {name: 'Java', releaseDate: 1995, fileExtension: '.java', creator: 'James Gosling'},
        {name: 'PHP', releaseDate: 1995, fileExtension: '.php', creator: 'Rasmus Lerdorf'},
        {name: 'C++', releaseDate: 1985, fileExtension: '.cpp', creator: 'Bjarne Stroustrup'},
    ];
    let elem1 = document.querySelector('#table-one');
    createTableWithDomMutationProperties(languages, elem1);
    let elem2 = document.querySelector('#table-two');
    createTableWithDomMutationMethods(languages, elem2);
}

/**
 * In the first variant of createTable(),
 *   you MUST ONLY use DOM mutation properties,
 *   such as innerHTML and textContent.
 * You MUST NOT use any DOM mutation method
 *   such as appendChild(), insertBefore(), etc.
 */
function createTableWithDomMutationProperties(arr, elem){
    let htmlStr = '<table>';
    htmlStr += tableHeaderList(Object.keys(arr[0]));
    htmlStr += tableBody(arr.map(rowData => tableRow(Object.values(rowData))));
    htmlStr +='</table>';
    elem.innerHTML = htmlStr;
}

/**
 * In the second variant of createTable(), you have do the opposite of variant 1.
 * That is, you MUST NOT use any DOM mutation properties, such as innerHTML and textContent.
 * Instead, you MUST ONLY use DOM mutation methods such as appendChild(), insertBefore(), etc.
 * Both these variants only differ in their underlying implementation; the result produced is exactly the same.
 */
function createTableWithDomMutationMethods(arr, elem){
    const tableHeader = document.createElement('thead');
    const tableRow = document.createElement('tr');

    // build header
    const headerTextList = Object.keys(arr[0]);
    const n = headerTextList.length;
    for(let i=0; i<n; i++){
        const tableHeaderCol = document.createElement('th');
        let text = document.createTextNode(headerTextList[i]);
        tableHeaderCol.appendChild(text);
        tableRow.appendChild(tableHeaderCol);
    }
    tableHeader.appendChild(tableRow);

    // build body
    const body = document.createElement('tbody');
    for(let i=0; i<n; i++){
        let row = document.createElement('tr');
        let col;
        for(let j=0; j<n; j++){
            col = document.createElement('td');
            let textNode = document.createTextNode(arr[i][headerTextList[j]]);
            col.appendChild(textNode);
            row.appendChild(col);
        }
        body.appendChild(row);
    }

    const frag = new DocumentFragment();
    const tableElem = document.createElement('table');
    tableElem.appendChild(tableHeader);
    tableElem.appendChild(body);
    frag.appendChild(tableElem);
    elem.appendChild(frag);
}
