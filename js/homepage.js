'use strict';

// pull from local storage and check for previous games
function loadUser() {
  const userGames = JSON.parse(localStorage.getItem('user')) || [];
  user = new User(userGames);
  console.log(user);
  
}

  //conditional statement that checks local storage to see if there is game if there isn't a game it does not the display the button.

// user clicks on new game(add window to DOM)
/*
let buttons = document.getElementById('actionButtons');
  //needs an eventlistener
  buttons.addEventListener('click', handleClick);
  //need to addeventhandler
  function handleClick(event){

  }

  */
//need to make a new object pulling from app.js
      
  

// if select new game just delete the last unfinished game and continue to game page with app.js
