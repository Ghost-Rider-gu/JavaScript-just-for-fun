function bubbleSorting(arrayOfNumbers) {
    if (arrayOfNumbers.length === 0) {
        alert("Array musn't be empty");
        return;
    }

    for (let i = arrayOfNumbers.length; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arrayOfNumbers[j] > arrayOfNumbers[j + 1]) {
                const temporary = arrayOfNumbers[j];
                arrayOfNumbers[j] = arrayOfNumbers[j + 1];
                arrayOfNumbers[j + 1] = temporary;
            }
        }
    }

    return arrayOfNumbers;
}

console.log(bubbleSorting([-23, 45, 0, 12, -5, 5, 2]));
console.log(bubbleSorting([8, 8, 0, 3, 6, 1]));
console.log(bubbleSorting([12, 12, 67, 89, 34, 90, -90]));
