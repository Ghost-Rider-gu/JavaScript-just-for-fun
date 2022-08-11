function firstReverseString(str) {
    return str.split('')
        .reverse()
        .join('');
}

function secondReverseString(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}
