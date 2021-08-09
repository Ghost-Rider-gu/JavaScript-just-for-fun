// Time complexity = O(sqrt(n))
function isPrimeNumber(number) {
    for (let i = 2; i < Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
