// Time complexity = O(n)
function fibonacciSequence(number) {
    const sequenceOfNumber = [1, 1];
    for (let i = 2; i < number; i++) {
        const sum = sequenceOfNumber[i - 2] + sequenceOfNumber[i - 1];
        sequenceOfNumber.push(sum);
    }
    return sequenceOfNumber[number];
}
