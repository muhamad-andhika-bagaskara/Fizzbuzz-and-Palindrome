const prompt = require('prompt');

class Palindrome {
  constructor() {
    this.description = "Palindromes are words, phrases, numbers, or other sequences that can be read the same both forward and backward.";
  }

  start() {
    console.log("=== Palindrome ===");
    console.log(this.description);

    prompt.get([
      {
        name : "text",
        description : "Enter text to check if it is a palindrome or not",
        type : "String"
      }
    ], (err, { text }) => {
      /* Run Palindrome Program */
      this.run(text);

      /* Trigger event as a marker of the completion of the program */
      this.onFinish();
    });
  }

  run( text ) {
    const isPalindrome = this.isPalindrome(text);
    const message = "Text is" + (isPalindrome ? "" : "n't") + " Palindrome!";

    /* Display message */
    console.log(message);
  }

  removeUnecessaryCharacters(text) {
    /* Convert to lower case */
    text = text.toLowerCase();

    /* Remove Empty Strings */
    text = this.removeEmptyStrings(text);

    /* Remove Symbols */
    text = this.removeSymbols(text);

    return text;
  }

  removeEmptyStrings(text) {
    /* Remove Empty Strings */
    return text.replace(/\s+/g, "");
  }

  removeSymbols(text) {
    /* Remove Symbols */
    return text.replace(/[&\/\\#,+\-()$~%.'":*?<>{}\[\]\=\^]/g, "");
  }

  isPalindrome(text) {
    /* Check Text is Palindrome or not */
    text = this.removeUnecessaryCharacters(text);
    /* reverse text */
    const reverseText = text.split("").reverse().join("");

    return text === reverseText;
  }
}

module.exports = Palindrome;