class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for(let i=0;i<nums.length;i++){
            let index1=nums[i];
            let j=i+1;
            while(j<nums.length){
                let index2= nums[j];
                if(target===(index1+ index2)){
                    return [i, j];
                }
                j++;
            }
        }
        return[]
    }
    // time - O(n²) 
    // space - o(1)

}
