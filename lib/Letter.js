// the Letter Class displays either an underscore or underlying char for each letter in the word
class Letter {
  constructor(char) {
    // if a char isnt a number or a letter, make it visible right away and save underlying char
    this.visible = !/[a-z1-9]/i.test(char);
    this.char = char;
  }

  // returns either underscore or the char depending on 'this.visible'
  //  ********  bc of fn toString, when you call 'this.letters.join' in Word.js, JS automatically uses the value returned here
  toString() {
    if (this.visible === true) {
      return this.char;
    }
    return '_';
  }

  getSolution() {
    return this.char;
  }

  // accepts user's guess
  guess(charGuess) {
    if (charGuess.toUpperCase() === this.char.toUpperCase()) {
      this.visible = true;
      return true;
    }
    return false;
  }
}

module.exports = Letter;
