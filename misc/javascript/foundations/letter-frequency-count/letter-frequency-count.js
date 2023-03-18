function letterFrequencyCount() {
    let countMap = getCountMap('A beginners mind is an advantage');
    writeCount(countMap);
}

function getCountMap(str){
    let map = {}
    for(let i=0; i<str.length; i++){
        if(map[str[i]] === undefined){
            map[str[i]] = 1;
        }
        else {
            map[str[i]] += 1;
        }
    }
    return map;
}

function writeCount(map){
    for(let k in map){
        document.write((k === ' ' ? `" "` : k) + ': ' + map[k] + '<br>')
    }
}
