/*
* Given an array of integers, return a first repeating number in that array.
* In case if nothing will be found return undefined.
*
* For example, if our input was [1, 2, 2, 3, 4, 1, 5], the expected output would be 2.
* If our input was [3, 2, 1], the expected output would be undefined.
*/

// Time complexity O(n^2)
function getFirstRecurringCharacter(inputArray) {
    for (let i = 0; i < inputArray.length; i++) {
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[i] == inputArray[j]) {
                return inputArray[i];
            }
        }
    }
    return undefined;
}

// Time complexity O(n)
function getFirstRecurringCharacterV2(inputArray) {
    let data = {};
    for (let i = 0; i < inputArray.length; i++) {
        if (data[inputArray[i]] !== undefined) {
            return inputArray[i];
        } else {
            data[inputArray[i]] = i;
        }
    }
    return undefined;
}

console.log(getFirstRecurringCharacter([1, 2, 2, 3, 4, 1, 5])); // expected result is 2
console.log(getFirstRecurringCharacterV2([3, 2, 1])); // expected result is undefined
