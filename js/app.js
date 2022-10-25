'use strict';

//Global variable and Functions and the Game Constructor and Functions
let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

//Window into the DOM


const Game = function(word) {
  this.word = word;
  this.guessedWords = [];
  this.completed = false;
};

const testGame = new Game('tiger');
const user = new User(0, [testGame]);

Game.prototype.addGuess = function(guessedWord) {
  this.guessedWords.push(guessedWord);
};

Game.prototype.renderGame = function() {
  tbody.innerHTML = '';
  for(let i in this.guessedWords){
    let tr = document.createElement('tr');
    console.log(this.guessedWords[i]);
    for(let j in this.guessedWords[i]) {
      let td = document.createElement('td');
      let word = this.guessedWords[i][j];
      console.log(word);
      td.textContent = word;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
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


// //console.log(parseWord('tiger','words'));

// function renderRow(guessedWord,arrayFromParseFunc){
//   // need the DOM window

//   // need to create the row

//   //need to attach row to Dom Window
// }

//eventHandlerFunction



//EXECUTABLE CODE

// 1. Attach eventlistenertotheDOM for the form

// 2. Check for the previous game else start new game

// 3. Display the game

function handleSubmit(event) {
  event.preventDefault();
  let guessedWord = event.target.name.value;
  user.addGuess(guessedWord);
  user.games[user.games.length-1].renderGame();
}



form.addEventListener('submit', handleSubmit);
