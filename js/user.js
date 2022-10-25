'use strict';

let wordBank = ['sleep', 'seize', 'unbed', 'debit', 'shale', 'skirl', 'plead', 'waste', 'bench', 'caked', 'alibi', 'capra', 'trump', 'right', 'shelf', 'cloff', 'value', 'maker', 'allow', 'hying', 'spoon', 'valid', 'poket', 'hoker', 'raise', 'shell', 'river', 'erase', 'wench', 'rival', 'spike', 'daisy', 'rapid', 'learn', 'reach', 'truth', 'pocky', 'azure', 'opera', 'prove', 'women', 'forth', 'apple', 'happy', 'angle', 'topic', 'lunch', 'treat'];

//User constructor and Functions



const User = function(score, games){
  this.score = score;
  this.games = games;
};

// create a new game function
   // creates a number random and choses from the word list and make a new game object.
User.prototype.createNewGame = function() {
// create function to generate random word from word bank.
  let newGame = new Game(word);
  this.games.push(newGame);
};

// User.prototype.saveToLocalStorage = function () {
//   let packedUser = JSON.stringify(user);
//   localStorage.setItem( 'user', packedUser);
// };

// function loadUser() {
//   const userInfo = JSON.parse(localStorage.getItem('user')) || [];
//   let user = new User(userInfo);
// };

User.prototype.addGuess = function(word) {
  this.games[this.games.length-1].guessedWords.push(word);
  console.log(this.games[this.games.length-1].guessedWords);
};

//to do: 

//addGame

//Determine High Score

//Determine Completed Percentage

// create a delete a game function
  //add an alert
