'use strict';

//Global variable and Functions and the Game Constructor and Functions
//Window into the DOM
let form = document.querySelector('form');
let tbody = document.querySelector('tbody');

//render the WordBoard on the game page

Game.prototype.renderGame = function () {
  tbody.innerHTML = '';

  for (let i in this.guessedWords) {
    let tr = document.createElement('tr');

    let pigsAndBulls = parseWord(this.correctWord, this.guessedWords[i]);
    let numOfPigs = pigsAndBulls[0];
    let numOfBulls = pigsAndBulls[1];
    let pigPadding = 5 - numOfPigs;
    let bullPadding = 5 - numOfBulls;
    //console.log(numOfPigs);
    //console.log(numOfBulls);


    for (let l = 0; l < pigPadding; l++) {
      let td = document.createElement('td');
      td.innerHTML = '';
      td.setAttribute('id', 'empty');
      tr.appendChild(td);
    }

    for (let m = 0; m < numOfPigs; m++) {
      let td = document.createElement('td');
      td.innerHTML = '<img src="../img/cartoonPig.png" alt="pigs">';
      tr.appendChild(td);
    }

    for (let j in this.guessedWords[i]) {

      let td = document.createElement('td');
      let word = this.guessedWords[i][j];

      td.textContent = word;
      tr.appendChild(td);
    }

    for (let n = 0; n < numOfBulls; n++) {
      let td = document.createElement('td');
      td.innerHTML = '<img src="../img/cartoonBull.png" alt="bulls">';
      tr.appendChild(td);
    }

    for (let l = 0; l < bullPadding; l++) {
      let td = document.createElement('td');
      td.innerHTML = '';
      td.setAttribute('id', 'empty');
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
    if (numOfBulls === 5) {
      this.completed = true;

      modal();
      break;
    }
  }
};


// --------*   modal    *-------- //
function modal() {
  let modal = document.getElementById('myModal');
  let btn = document.getElementById('myBtn');
  let span = document.getElementsByClassName('close')[0];

  btn.onclick = function () {
    modal.style.display = 'block';
  };

  span.onlick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
}


//ParseWord Function takes 2 strings and returns an array of 2 numbers

function parseWord(correctWord, guessWord) {

  let numberOfPigs = 0;
  let numberOfBulls = 0;

  for (let i in correctWord) {
    for (let j in guessWord) {
      //console.log(`${guessWord[j]} inner word`);
      if (correctWord[i] === guessWord[j] && i === j) {
        numberOfBulls++;
      } else if (correctWord[i] === guessWord[j]) {
        numberOfPigs++;
        break;
      }
    }
    //console.log(correctWord[i]);
  }
  let result = [numberOfPigs, numberOfBulls];
  return (result);
}

function handleSubmit(event) {
  event.preventDefault();
  let guessedWord = event.target.name.value;
  user.addGuess(guessedWord);
  user.games[user.games.length - 1].renderGame();
  localStorage.clear();
  user.saveToLocalStorage();
}

//EXECUTABLE CODE


// 1. Attach eventlistenertotheDOM for the form




form.addEventListener('submit', handleSubmit);

// 2. Check for the previous game else start new game

let user = new User(0, []);
loadUser();

//Load the table upon initial page load
user.games[user.games.length - 1].renderGame();


function loadUser() {

  const userGames = JSON.parse(localStorage.getItem('user')) || new User(0, []);
  console.log(userGames);

  user = new User(userGames.score, userGames.games);
  if (user.games.length < 1) {
    user.createNewGame();
  }
  console.log(user);


  //Reinstantiation - yes for game objects
  for (let i in user.games) {
    console.log(i);
    user.games[i] = new Game(user.games[i].correctWord, user.games[i].guessedWords, user.games[i].completed);
  }

}
