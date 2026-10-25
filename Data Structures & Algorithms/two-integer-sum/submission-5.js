class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    /* -------Brute Force------------------------------------- 
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
    // **** time - O(n²)  space - o(1) */

    /* Sorting----------------------------------------------- 
       twoSum(nums, target) {
        let arr=[] // [2,7,11,5]
        for(let i=0;i<nums.length;i++){
           arr.push([nums[i], i]);
        }
        // arr =[[2,0],[7,1],[11,2],[5,3]]
        arr.sort((a,b)=>a[0]-b[0]);
        //  arr =[[2,0],[5,3],[7,1],[11,2]]
        let i =0,  j=nums.length -1 // 3
        while(i<j){
            let curr=arr[i][0] +arr[j][0];
            if(curr === target){
                return[Math.min(arr[i][1],arr[j][1]),Math.max(arr[i][1],arr[j][1])]
            }else if(curr<target){
                i++;
            }else{
                j--;
            }
        }
        return []
    }
    Time o(n logn) Space- o(n)
    */

    /* // Hash map (two pass)---------------------------------------------------- 
    twoSum(nums, target) {
         //nums [2,7,11,5]
        let indices ={};
        for(let i=0;i<nums.length;i++){
            indices[nums[i]]=i;
        }
        //indices {2:0,7:1,11:2,5:3}
        for(let i=0;i<nums.length;i++){
            let diff= target-nums[i]; // 9-2 =7
            // indices[7]!==undefined && indices[7]!==0 -
            //For example,if nums =[3, 4] and target = 6, we must not use the number 3  twice just because 6 - 3 = 3.
            if(indices[diff]!==undefined && indices[diff]!==i){
                return[i, indices[diff]]
            }
        }
        return [];
    }
    */

    // Hash map (One pass)---------------------------------------------------- 
     twoSum(nums, target) {
          //nums [2,7,11,5]
         let indices ={};
        for(let i=0;i<nums.length;i++){
            let diff = target-nums[i]; // 9-2 = 7 / 9-7 =2
            if(indices[diff]!==undefined){
                return [indices[diff],i]
            }else{
                indices[nums[i]]=i;
            }
        }
        return[];
     }
}
