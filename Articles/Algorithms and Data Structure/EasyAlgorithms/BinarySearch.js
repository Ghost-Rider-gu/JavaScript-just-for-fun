function binarySearch(arrayOfNumber, target) {
    const middleIndex = Math.floor(arrayOfNumber.length / 2);
    const middleElement = arrayOfNumber[middleIndex];
    
    if (middleElement === target) {
        return 'Number is found in the array';
    } else if (middleElement < target && arrayOfNumber.length > 1) {
        return binarySearch(arrayOfNumber.splice(middleIndex, arrayOfNumber.length), target);
    } else if (middleElement > target && arrayOfNumber.length > 1) {
        return binarySearch(arrayOfNumber.splice(0, middleIndex), target);
    } else {
        return 'Number is not found in the array';
    }
}

console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56));
console.log(binarySearch([12, 6, 436, 7, 0, -4, -71], 76));
console.log(binarySearch([5, 23, 4, 79, 70, 0, 8, 12, 16, 36, 39, 44], 44));
