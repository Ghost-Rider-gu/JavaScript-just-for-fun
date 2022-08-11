function reverseWords(stringOfWords) {
    const words = stringOfWords.split(' ');
    let result = [];
    
    words.forEach(word => {
        let reversedWord = '';
        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        };
        result.push(reversedWord);
    });
    
    return result.join(' ');
}

console.log(reverseWords('Hello world this is me'));
console.log(reverseWords('I will be back'));
