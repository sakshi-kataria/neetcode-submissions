class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        let sCount= {}, tCount={};
        for (let i=0;i<s.length;i++){
            sCount[s[i]]= (sCount[s[i]] || 0) + 1; 
            tCount[t[i]]= (tCount[t[i]] || 0) + 1; 
        }
        for(const key in sCount){
            if(sCount[key]!==tCount[key]){
                return false;
            }
        }
        return true;
    }
}
/*
Time: O(n + m)- Where n n is the length of string s s and m m is the length of string t t.
Space: O(1)- since we have at most 26 different characters
 */