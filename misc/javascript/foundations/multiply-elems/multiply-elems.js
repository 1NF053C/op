function multiplyElems(){
    let result = getProduct([1,5,70,-2,-1,-0.5]) // -350
    document.write(result);
}

function getProduct(list){
    return list.reduce((p,c)=> p*c)
}

