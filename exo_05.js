function hasSum(nums, k) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        let currentSum = nums[start] + nums[end];
        if (currentSum === k) {
            return true;
        } else if (currentSum < k) {
            start++;
        } else {
            end--;
        }
    }
    return false;
}


console.log(hasSum([10, 15, 3, 7], 17));
console.log(hasSum([1, 8, 10, 21], 19));