'use strict';

//Global variable and Functions and the Game Constructor and Functions


let wordBank = ['sleep', 'seize', 'unbed', 'debit', 'shale', 'skirl', 'plead', 'waste', 'bench', 'caked', 'alibi', 'capra', 'trump', 'right', 'shelf', 'cloff', 'value', 'maker', 'allow', 'hying', 'spoon', 'valid', 'poket', 'hoker', 'raise', 'shell', 'river', 'erase', 'wench', 'rival', 'spike', 'daisy', 'rapid', 'learn', 'reach', 'truth', 'pocky', 'azure', 'opera', 'prove', 'women', 'forth', 'apple', 'happy', 'angle', 'topic', 'lunch', 'treat'];

//Window into the DOM


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



//ParseWord Function takes 2 strings and returns an array of 2 numbers

function parseWord(correctWord, guessWord){
  
  let numberOfPigs = 0;
  let numberOfBulls = 0;
  
  for( let i in correctWord){
    
    for(let j in guessWord){
      //console.log(`${guessWord[j]} inner word`);
      if(correctWord[i]===guessWord[j] && i === j){
        numberOfBulls++;
      } else if(correctWord[i]===guessWord[j]){
        numberOfPigs++;
      }
    }
    //console.log(correctWord[i]);
  }
  let result = [numberOfPigs,numberOfBulls];
  return(result);
}


//console.log(parseWord('tiger','words'));

function renderRow(guessedWord,arrayFromParseFunc){
  // need the DOM window

  // need to create the row

  //need to attach row to Dom Window
}

//eventHandlerFunction



//EXECUTABLE CODE

// 1. Attach eventlistenertotheDOM for the form

// 2. Check for the previous game else start new game

// 3. Display the game

