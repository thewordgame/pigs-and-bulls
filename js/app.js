'use strict';

//Global variable and Functions and the Game Constructor and Functions
let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

//Window into the DOM


const Game = function(correctWord) {
  this.correctWord = correctWord;
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

    let pigsAndBulls = parseWord(this.correctWord, this.guessedWords[i]);
    let numOfPigs = pigsAndBulls[0];
    let numOfBulls = pigsAndBulls[1];

    console.log(numOfPigs);
    console.log(numOfBulls);

    for(let m = 0;m < numOfPigs; m++){
      let td = document.createElement('td');
      td.innerHTML = '<img src="../img/cartoonPig.png" alt="pigs">';
      tr.appendChild(td);
    }

    for(let j in this.guessedWords[i]) {

      let td = document.createElement('td');
      let word = this.guessedWords[i][j];
      
      td.textContent = word;
      tr.appendChild(td);
    }

    for(let n = 0;n < numOfBulls; n++){
      let td = document.createElement('td');
      td.innerHTML = '<img src="../img/cartoonBull.png" alt="bulls">';
      tr.appendChild(td);
    }

    

    tbody.appendChild(tr);
    if(numOfBulls===5){
      this.completed=true;
      
    }
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



//EXECUTABLE CODE

// 1. Attach eventlistenertotheDOM for the form

// 2. Check for the previous game else start new game

function handleSubmit(event) {
  event.preventDefault();
  let guessedWord = event.target.name.value;
  user.addGuess(guessedWord);
  user.games[user.games.length-1].renderGame();
  user.saveToLocalStorage();
}




form.addEventListener('submit', handleSubmit);
