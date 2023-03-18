function objectCreatePolyfill(){
    let a = {
        x: 10,
        y: 20
    };
    let b = createObject(a);
    document.write(b.x);
    document.write('<br>');
    document.write(b.y);
    document.write('<br>');
}

function createObject(proto){
    function F() {}
    F.prototype = proto;
    return new F();
}
