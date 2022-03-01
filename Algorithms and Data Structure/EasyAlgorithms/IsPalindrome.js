function isPalindrome(string) {
    const str = string.toLowerCase();
    const charactersArray = str.split('');
    const validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    const lettersArray = [];
    charactersArray.forEach(char => {
        if (validCharacters.indexOf(char) > -1) {
            lettersArray.push(char);
        }
    });
    
    return lettersArray.join('') === lettersArray.reverse().join('');
}

console.log(isPalindrome("Test of the text"));
console.log(isPalindrome("Was it a car or a cat I saw"));
console.log(isPalindrome("Taco cat"));
