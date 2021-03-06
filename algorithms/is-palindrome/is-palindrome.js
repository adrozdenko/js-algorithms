function isPalindrome(string = '') {
    const validChars = 'abcdefghijklmnopqrstuvwxyz'.split('');

    let lowerStr = string.toLowerCase();
    let charsArr = lowerStr.split('');

    let lettersArr = [];

    charsArr.forEach(char => {
        if (validChars.includes(char)) {
            lettersArr.push(char);
        }
    });

    let initialString = lettersArr.join('');
    let reverseString = lettersArr.reverse().join('');

    return initialString === reverseString;
}

module.exports = isPalindrome;
