function checkSum(numbers, k) {
    const complements = new Set();
    for (let i = 0; i < numbers.length; i++) {
      if (complements.has(numbers[i])) {
        return true;
      }
      complements.add(k - numbers[i]);
    }
    return false;
  }

console.log(checkSum([10, 15, 3, 7], 25));
console.log(checkSum([1, 8, 10, 21], 19));