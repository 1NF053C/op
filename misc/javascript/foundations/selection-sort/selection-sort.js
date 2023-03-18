function selectionSort(){
    let list = [9, 1, 4, 2, 6, 7, 7, 3, 23, 22];
    sorted = sortMaxFirst(list);
    document.write(list);
}

// below are two examples of selection sort. one sorts the beginning of the list first, using min values
// and the other sorts the end of the list first, using max values
function sortMinFirst(list){
    for(let firstUnsortedIndex = 0; firstUnsortedIndex < list.length - 1; firstUnsortedIndex++){
        let min = list[firstUnsortedIndex];
        let minIndex;
        for(let i = firstUnsortedIndex + 1; i < list.length; i++){
            if(list[i] < min){
                min = list[i];
                minIndex = i;
            }
        }
        list[minIndex] = list[firstUnsortedIndex]
        list[firstUnsortedIndex] = min;
    }
    return list;
}

function sortMaxFirst(list){
    for(let lastUnsortedIndex = list.length - 1; lastUnsortedIndex > 0; lastUnsortedIndex--){
        let max;
        let maxIndex;
        for(let i=0; i<=lastUnsortedIndex; i++){
            if(list[i] > max){
                max = max;
                maxIndex = i;
            }
        }
        list[maxIndex] = list[lastUnsortedIndex]
        list[lastUnsortedIndex] = max;
    }
}
