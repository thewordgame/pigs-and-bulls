'use strict';

// pull from local storage and check for previous games

function loadUser() {
  const userGames = JSON.parse(localStorage.getItem('user')) || [];
  console.log(userGames);
  user = new User(userGames.score, userGames.games);
  if (user.games === undefined) {
    user.score = 0;
    user.games = [];
  }
  console.log(user);
}

//Executable Code

let user = new User(0, []);

loadUser();

let buttons = document.getElementById('actionButtons');

//needs an eventlistener
buttons.addEventListener('click', handleClick);

//need to addeventhandler
function handleClick(event) {

  // let name = event.target.name;
  // //console.log(event.target.id);
  // //console.log(name);
  // if(name === 'playButton'){
  //   window.location.href = "gamepage.html";
  // }

  if (event.target.id === 'newgameButton') {

    user.createNewGame();
    user.saveToLocalStorage();
    window.location.href = "gamepage.html";
  }
}
