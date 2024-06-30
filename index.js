function isPalindrome(word) {
  word = word.toLowerCase();
  // Write your algorithm here
  // Problem Description:
  // Write a function `isPalindrome` that will receive one argument, a string.

  // if word is equal to word reversed:
  //   return "true"
  //   then else "false"
let reversed = word.split('').reverse().join('')
  if (word === reversed) {
    return true
  } else {
    return false
  }

}



/* 
  Add your pseudocode here

initialize empty array called result

iterate over each item in the input array:
  if element is a number:
    push item onto result

return result

if word is equal to word spelled the same, but reversed:
    return "true"
    then else "false"

  Input: "madam"
  Output: "true"

  Input: "robot"
  Output: "false"
*/

/*
  Add written explanation of your solution here

if the input is equal to the same word but backwards, it returns true.
Otherwise, returns false

*/

// You can run `node index.js` to view these console logs
 if (require.main === module) {
//   // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
