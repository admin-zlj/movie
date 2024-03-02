/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const set = new Set();
    let ans = 0;
    let i = 0;
    let j = 0;
    const sl = s.length;
    
    while (i < sl && j < sl) {
        if (!set.has(s[j])) {
            set.add(s[j++]);
            ans = Math.max(ans, j - i);
        } else {
            set.delete(s[i++]);
        }
    }
    
    return ans;
};

console.log( lengthOfLongestSubstring("abebc"))



'78#66$983#88$88'.replace(/\d+\$\d+/,(match)=>{console.log('match', match)})