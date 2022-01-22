function splitArray(arrayOfNumbers) {    
    if (arrayOfNumbers.length === 0) {
        alert("Array musn't be empty");
        return;
    }
    
    if (arrayOfNumbers.length < 2) {
        return arrayOfNumbers;
    }

    const middleOfArray = Math.floor(arrayOfNumbers.length / 2);
    const firstHalf = arrayOfNumbers.slice(0, middleOfArray);
    const secondHalf = arrayOfNumbers.slice(middleOfArray);
    
    return mergeSorting(splitArray(firstHalf), splitArray(secondHalf));
}

function mergeSorting(firstHalfOfArray, secondHalfOfArray) { 
    let result = [];
    while (firstHalfOfArray.length && secondHalfOfArray.length) {
        let minElement;        
        if (firstHalfOfArray[0] < secondHalfOfArray[0]) {
            minElement = firstHalfOfArray.shift();
        } else {
            minElement = secondHalfOfArray.shift();
        }
      result.push(minElement);
    }
    
    if (firstHalfOfArray.length) {
        result = result.concat(firstHalfOfArray);
    } else {
        result = result.concat(secondHalfOfArray);
    }

    return result;
}

console.log(splitArray([600, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]));
console.log(splitArray([-20, 56, 9, 1, -88, 88, -88, 5, 12, 3]));
