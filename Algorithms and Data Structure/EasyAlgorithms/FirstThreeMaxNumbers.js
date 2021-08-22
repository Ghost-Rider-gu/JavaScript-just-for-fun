// Find first three largest numbers in array (without sorting)
// Time complexity = O(n)
function firstThreeMaxNumbers(numbers) {
    if (numbers.length < 3) {
        console.log('Array size must be greater than 3');
        return;
    }

    let firstMax = 0;
    let secondMax = 0;
    let thirdMax = 0;

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        if (currentNumber > firstMax) {
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = currentNumber;
        } else if (currentNumber > secondMax) {
            thirdMax = secondMax;
            secondMax = currentNumber;
        } else if (currentNumber > thirdMax) {
            thirdMax = currentNumber;
        }
    }

    return [firstMax, secondMax, thirdMax];
}
