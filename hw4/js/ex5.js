// function to count and return number of vowels in a string
let str =prompt("Enter a word: ");
function countVowel(str) {
	//Initializing vowels array to check for vowels
    const vowels = ["a", "e", "i", "o", "u"]
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // return number of vowels
    return count
}

//function to check if a string is palindrome
function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last characters of string are same
        if (string[i] !== string[len - 1 - i].toLowerCase) {
            return 'and is not a palindrome';
        }
    }
    return 'and is a palindrome';
}
console.log(`${str} contains ${countVowel(str)} vowels ${checkPalindrome(str)}`);
