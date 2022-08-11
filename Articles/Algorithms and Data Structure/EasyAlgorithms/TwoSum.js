function twoSum(arrayOfNumber, sum) {
    let result = [];
    let hashTable = [];
    
    for (let i = 0; i < arrayOfNumber.length; i++) {
        const currentNumber = arrayOfNumber[i];
        const differencePart = sum - currentNumber;
        if (hashTable.indexOf(differencePart) !== -1) {
            result.push([currentNumber, differencePart]);
        }
        hashTable.push(currentNumber);
    }
    
    return result;
}

console.log(twoSum([2, 6, 5, 5, 3, 3], 8));
console.log(twoSum([4, 6, 4, 5, 9, 13], 10));
console.log(twoSum([14, 9, 40, 15, 13, 10], 23));
