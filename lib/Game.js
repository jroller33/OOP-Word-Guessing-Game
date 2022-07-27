const inquirer = require("inquirer");
const chalk = require("chalk");
const Word = require("./Word");
const words = require("./words");

// the Game constructor keeps score and controls the flow of the game
class Game {
  // save a reference for 'this' in 'this', bc 'this' will change inside of inquirer
  constructor() {
    this.guessesLeft = 0;
  }
  play() {
    this.guessesLeft = 10;
    this.nextWord();
  }

  // makes new Word object using random word from the array, asks user for their guess
  nextWord() {
    const randWord = words[Math.floor(Math.random() * words.length)];
    this.currentWord = new Word(randWord);
    console.log("\n" + this.currentWord.toString() + "\n");
    this.makeGuess();
  }

  // uses inquirer to prompt user for their guess
  makeGuess() {
    this.askForLetter().then(() => {
      // if the user has no guesses remaining after this guess, show them the phrase, ask if they want to play again
      if (this.guessesLeft < 1) {
        console.log(
          'No guesses left! Phrase was: "' +
            this.currentWord.getSolution() +
            '"\n'
        );
        this.askToPlayAgain();
        // if user guessed all letters of the current phrase correctly, reset guessesLeft to 10 and get next word
      } else if (this.currentWord.guessedCorrectly()) {
        console.log("You got it right! Next phrase!");
        this.guessesLeft = 10;
        this.nextWord();
      } else {
        this.makeGuess();
      }
    });
  }

  askToPlayAgain() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Play Again?"
        }
      ])
      .then(val => {
        if (val.choice) {
          this.play();
        } else {
          this.quit();
        }
      });
  }

  askForLetter() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "choice",
          message: "Guess a letter!",
          validate: val => /[a-z1-9]/gi.test(val),// users guess must be number or letter

        }
      ])
      .then(val => {
        // If user's guess is in the current word, log that they chose correctly
        const didGuessCorrectly = this.currentWord.guessLetter(val.choice);
        if (didGuessCorrectly) {
          console.log(chalk.green("\nCORRECT!!!\n"));

          // else decrement 'guessesLeft', and let them know how many guesses are left
        } else {
          this.guessesLeft--;
          console.log(chalk.red("\nINCORRECT!!!\n"));
          console.log(this.guessesLeft + " guesses remaining!!!\n");
        }

        console.log(this.currentWord.toString() + "\n");
      });
  }
  quit() {
    console.log("\nbye");
    process.exit(0);
  }
}

module.exports = Game;