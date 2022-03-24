function isPalindrome(word) {
  // Write your algorithm here
   if(word === word.split('').reverse().join('')){
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  // create if/else statement that takes in param & use relational operator
  // split the string, reverse it, then join it
  // return result
*/

/*
  Add written explanation of your solution here
  My function takes in a param of word. I created an if/else statement that compares the conditions with the word. The string is split into an array of substrings, reversed, then joined & compared to the original string. If the parts of the string are the same, then it is effectively a palindrome and therefore returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
