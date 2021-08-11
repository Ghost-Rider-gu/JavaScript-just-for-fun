// Time complexity = O(log n) -> logarithmic complexity
function isPowerOfTwo(number) {
    if (number < 1) {
        return false;
    }

    let dividedNumber = number;
    while (dividedNumber !== 1) {
        if (dividedNumber % 2 !== 0 ) {
            return false;
        }
        dividedNumber = dividedNumber / 2;
    }
    return true;
}

// Time complexity = O(1)
function isPowerOfTwoBitwise(number) {
    if (number < 1) {
        return false;
    }

    return (number & (number - 1)) === 0;
}
