function forIn(){
    let point = {
        x: 4,
        y: 8
    }
    
    for (let p in point){
        document.write(
            `"${p}" => ${point[p]} <br>`
        )
    }
}
