function checkSum(nums, k, start = 0) {
    if (start >= nums.length) {
        return false;
    }
    for (let i = start + 1; i < nums.length; i++) {
        if (nums[start] + nums[i] === k) {
            return true;
        }
    }
    return checkSum(nums, k, start + 1);
}


console.log(checkSum([10, 15, 3, 7], 25));
console.log(checkSum([1, 8, 10, 21], 19));