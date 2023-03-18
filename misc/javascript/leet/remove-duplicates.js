/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    let i = 0;
    while(i<s.length-1){
        if(s[i] === s[i+1]){
            s = s.substring(0, i) + s.substring(i+2, s.length);
            i=0;
        }
        else {
            i++;
        }
    }
    return s;
};
