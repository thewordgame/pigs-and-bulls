'use strict';

//Global variable and Functions and the Game Constructor and Functions

let wordBank = ['sleep', 'seize', 'unbed', 'debit', 'shale', 'skirl', 'plead', 'waste', 'bench', 'caked', 'alibi', 'capra', 'trump', 'right', 'shelf', 'cloff', 'value', 'maker', 'allow', 'hying', 'spoon', 'valid', 'poket', 'hoker', 'raise', 'shell', 'river', 'erase', 'wench', 'rival', 'spike', 'daisy', 'rapid', 'learn', 'reach', 'truth', 'pocky', 'azure', 'opera', 'prove', 'women', 'forth', 'apple', 'happy', 'angle', 'topic', 'lunch', 'treat'];

const game = function(word) {
  this.word = word;
  this.guessedWords = [];
  this.completed = false;
};

game.prototype.check = function() {
  for(let i of wordBank){
    if(this.word.toLowercase() === wordBank[i].toLowercase()) {
      this.completed = true;
    }
  }
  this.guessedWords.push(this.word);
};
