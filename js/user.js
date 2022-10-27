'use strict';

let wordBank = ['tiger', 'light', 'tires', 'waste', 'learn', 'reach', 'value', 'opera', 'maker', 'great', 'prove', 'right', 'debit', 'shelf'];

//User constructor and Functions

const User = function (score, games) {
  this.score = score;
  this.games = games;
};

// Game constructor (need it here to create new games from homepage)
const Game = function (correctWord, guessedWords = [], completed = false) {
  this.correctWord = correctWord;
  this.guessedWords = guessedWords;
  this.completed = completed;
};

// create a new game function
User.prototype.createNewGame = function () {
  // create function to generate random word from word bank.
  let randWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
  console.log(randWord);

  //add a way to ensure a word is not used twice in a row
  if (this.games.length > 1) {
    while ((this.games[this.games.length - 1].correctWord === randWord)) {
      let randWord = wordBank[Math.floor(Math.random() * (wordBank.length))];
      console.log(randWord);
    }
  }

  let newGame = new Game(randWord);
  this.games.push(newGame);



};

User.prototype.saveToLocalStorage = function () {
  let packedUser = JSON.stringify(user);
  localStorage.setItem('user', packedUser);
};


User.prototype.addGuess = function (word) {
  this.games[this.games.length - 1].guessedWords.push(word);
  console.log(this.games[this.games.length - 1].guessedWords);
};

User.prototype.highScore = function () {
  let tempHighScore = this.games[this.games.length - 1].guessedWords.length;
  console.log (tempHighScore);
  if (this.score === 0) {
    this.score = tempHighScore;
  } else if (tempHighScore < this.score) {
    this.score = tempHighScore;
  }
  console.log(this.score);
};
//Determine High Score

//Determine Completed Percentage
