/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    this.combos = [];
    this.i = 0;
    const N = characters.length;
    const K = combinationLength;
    const numMasks = 2 ** N;
    for(let i=numMasks-1; i>0; i--){
        const mask = i.toString(2).padStart(N, '0');
        let seq = 0;
        for(let j=0; j<mask.length; j++){
            seq += mask.charAt(j) === '1' ? 1 : 0;
        }
        if(seq === K){
            let combo = ''
            for(let m=0; m<N; m++){
                if(mask.charAt(m) === '1'){
                    combo += characters.charAt(m);
                }
            }
            this.combos.push(combo);
        }
    }
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    return this.combos[this.i++];
}

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.i < this.combos.length;
};
