/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefixOne = function(strs) {
    let substr = '';
    strs.forEach(w => {
        for(const c of w){
            if(strs.every(word => word.startsWith(substr + c))){
                substr += c
             }
             else {
                 return substr;
             }
        }
    });
    return substr;
};

/**
 * Optimized:
 */
var longestCommonPrefix = function(strs) {
    let n = strs.length;
    if(n === 0){
        return '';
    }
    let substr = strs[0]
    for(let i=1; i<n; i++){
        while(strs[i].indexOf(substr) !== 0) substr = substr.substring(0, substr.length-1);
    }
    return substr;
};
