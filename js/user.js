'use strict';

let wordBank = ['sleep', 'seize', 'unbed', 'debit', 'shale', 'skirl', 'plead', 'waste', 'bench', 'caked', 'alibi', 'capra', 'trump', 'right', 'shelf', 'cloff', 'value', 'maker', 'allow', 'hying', 'spoon', 'valid', 'poket', 'hoker', 'raise', 'shell', 'river', 'erase', 'wench', 'rival', 'spike', 'daisy', 'rapid', 'learn', 'reach', 'truth', 'pocky', 'azure', 'opera', 'prove', 'women', 'forth', 'apple', 'happy', 'angle', 'topic', 'lunch', 'treat'];

//User constructor and Functions

const user = new user (0, []);

const User = function(score, games){
  this.score = score;
  this.games = games;
};


User.prototype.addGame = function(word, guess, complete) {
  this.games.push(new game(word, guess, complete));
};

User.prototype.saveToLocalStorage = function () {
  let packedUser = JSON.stringify(user);
  localStorage.setItem( 'user', packedUser);
};

function loadUser() {
  const userInfo = JSON.parse(localStorage.getItem('user')) || [];
  user = new User(userInfo);
};

// create a new game function
   // creates a number random and choses from the word list and make a new game object.

User.prototype.createNewGame = function() {
// create function to generate random word from word bank.
  let newGame = new Game(word);
  this.games.push(newGame);
}


//to do: 

//addGame

//Determine High Score

//Determine Completed Percentage

// create a delete a game function
  //add an alert
