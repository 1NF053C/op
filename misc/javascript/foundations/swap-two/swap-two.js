function swapTwo(){
    let x = 0;
    let y = 1;

    document.write("input: " + x + " " + y + "<br>");

    [x, y] = swap(x, y);

    document.write("swapped: " + x + " " + y);
}

function swap(x, y){
    let temp = x;
    x = y;
    y = temp;
    return [x, y]
}
