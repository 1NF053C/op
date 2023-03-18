function binarySearch(){
    let list = [2,4,2,4,25,664,23232];
    let target = 23232;
    document.write(search(target, list));
    document.write('<br>' + search(0, list));
}

function search(target, list){
    list.sort((a,b) => {
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });
    let lo = 0;
    let hi = list.length-1;
    while(lo <= hi){
        let mid = Math.floor((hi+lo)/2);
        if(target > list[mid]) lo = mid+1;
        else if(target < list[mid]) hi = mid-1;
        else return true; // target === list[mid]
    }
    return false;
}
