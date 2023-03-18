function table() {
    const div = document.querySelector('#table');
    const data = [
        item("Orange juice", 2.30),
        item("Chocolate cookie", 1.00),
        item("Lemon tart", 1.50)
    ];
    new SortableTable(div, data);
}

function item(name, price) {
    return {
        name,
        price
    }
}

class SortableTable {
    constructor(elem, data) {
        this.root = elem;
        this.data = data;

        this.thead = this.createTableHeader();
        this.table = document.createElement('table');
        this.table.appendChild(this.thead);

        this.tbody = this.createTableBody();
        this.table.appendChild(this.tbody);

        this.root.appendChild(this.table);
    }

    createTableHeader() {
        const tr = document.createElement('tr');
        Object.keys(this.data[0]).forEach(key => {
            const th = document.createElement('th');
            th.appendChild(document.createTextNode(key));
            th.onclick = this.handleSortColumns.bind(this);
            tr.appendChild(th);
        });
        const thead = document.createElement('thead');
        thead.appendChild(tr);
        return thead;
    }

    handleSortColumns(e){
        const th = e.target;
        const fieldToSortBy = th.textContent;
        let weight = 1;
        if(fieldToSortBy === 'price'){
            weight = -1;
        }
        this.data = this.data.sort((a, b) => {
            a = a[fieldToSortBy];
            b = b[fieldToSortBy];
            console.log(a, b);
            if(a > b) return 1 * weight;
            if(a < b) return -1 * weight;
            else {
                return 0;
            }
        });
        this.tbody = this.createTableBody();
        this.table.textContent = '';
        this.table.appendChild(this.thead);
        this.table.appendChild(this.tbody);
    }

    createTableBody() {
        const tbody = document.createElement('tbody');
        Object.values(this.data).forEach(value => {
            const tr = document.createElement('tr');
            const nameCol = document.createElement('td');
            nameCol.appendChild(document.createTextNode(value.name));
            const priceCol = document.createElement('td');
            priceCol.appendChild(document.createTextNode(value.price));
            tr.appendChild(nameCol);
            tr.appendChild(priceCol);
            tbody.append(tr);
        });
        return tbody;
    }
}
