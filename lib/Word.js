const Letter = require("./Letter");

// the Word class creates an array of Letter objs and determines if user guessed every Letter correctly
class Word {
  constructor(word) {
    // .map - instantiate new 'Letter' for each character and return an array
    // referred to with instance var 'letters'
    this.letters = word.split("").map(char => new Letter(char));
  }

  getSolution() {
    return this.letters
      // iterate over each letter and return solution for each to make array of solved letters
      .map(letter => letter.getSolution())
      .join("");
  }

  // making 'toString()' a method lets us concatenate it like a string
  toString() {
    return this.letters.join(" "); //  ****** see Letter.prototype.toString in Letter.js
  }

  guessLetter(char) {
    // checks if any letters in the array match user's guess and updates 'foundLetter'
    let foundLetter = false;
    this.letters.forEach(letter => {
      if (letter.guess(char)) {
        foundLetter = true;
      }
    });
    return foundLetter;
  }

  // returns true if all letters in the phrase have been guessed
  guessedCorrectly() {
    // 'every' method returns true if the callback fn returns true for every element in the array
    return this.letters.every(letter => letter.visible);
  }
}

module.exports = Word;