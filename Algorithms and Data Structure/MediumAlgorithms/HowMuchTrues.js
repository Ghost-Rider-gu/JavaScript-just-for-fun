/*
* This stuff was getting from LeetCode.
*
* Create a function which returns the number of true values there are in an array.
* 
* Examples: countTrue([true, false, false, true, false]) ➞ 2,
            countTrue([false, false, false, false]) ➞ 0,
            countTrue([]) ➞ 0
 */
function countTrue(inputArray) {
    return inputArray.filter(x => x).length;
}

console.log(countTrue([true, false, false, true, false])); // 2
console.log(countTrue([true, false, true, true, false])); // 3
console.log(countTrue([false, false, false, false])); // 0
console.log(countTrue([])); // 0
