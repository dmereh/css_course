var twoSum = function(nums, target) {
    const map = new Map(); // value → index
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    // Problem guarantees exactly one solution, so no need for fallback.
};

var nums = [2, 7, 11, 15] 
var target = 9
console.log(twoSum(nums, target)) // [0, 1] 