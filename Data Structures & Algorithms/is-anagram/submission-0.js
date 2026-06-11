class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const count = new Array(26).fill(0);
        for(let i=0; i<s.length;i++){
            count[s.charCodeAt(i)-97]++;
            count[t.charCodeAt(i)-97]--;
        }
        for(const c of count){
            if(c!==0) return false;
        }
        return true;

    }
}
/*
Time: O(n)
Space: O(1)

Why it's best:

One pass through strings
Fixed-size array (26)
Faster than hash maps due to array indexing

We must inspect all characters, so O(n) time is optimal. 
Since the input contains only lowercase English letters, 
we can use a fixed-size array of 26 elements, giving O(1) space. 
Using an array is also faster than hash maps because 
it uses direct indexing and stores frequency differences in a single pass.
 */