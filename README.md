# Word Guessing Game

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


This is a Node.js game similar to Wheel of Fortune that uses OOP concepts like classes, subclasses, prototypes, constructors, methods, etc. <br/>
Dependencies are `inquirer`, `chalk`, and `jest`. <br/>
## Instructions:
Navigate to the directory, run `npm i` in the terminal, then run `npm start` or `node index.js`.<br/>
For testing, run `npm test`. 'Letter' and 'Word' classes should pass the tests in './test/'

The blank spaces show you how many letters and words are in the phrase. When you guess a letter correctly it will show up in the correct blank(s) and you'll be asked to guess again. If you guess a wrong letter, you'll be shown how many guesses you have remaining (you start out with 10 guesses), and you'll be asked to guess again. 
<br/>

If you guess the phrase correctly before you run out of guesses, a new Game object will be instantiated by the constructor, a new phrase will be randomly chosen from the array of phrases, and the game will start over. If you don't guess the phrase correctly you'll be asked whether you want to play again.
#
This project is licensed under the MIT License.
