// where the chart logic goes
function loadUser() {
  const userGames = JSON.parse(localStorage.getItem('user')) || [];
  user = new User(userGames.score, userGames.games);
  if (user.games === undefined) {
    user.score = 0;
    user.games = [];
  }
  console.log(user);
}

loadUser();

//total games played
console.log(user.games.length);
//best score
console.log(user.score);
//games completed vs games played

function calcWinPercent(){
  let completed = 0;
  let nonCompleted = 0;
  for(let i = 0; i < user.games.length; i++){
    if (user.games[i].completed){
      completed ++;
    }else {
      nonCompleted ++;
    }
  }
  let winPercent = completed/user.games.length * 100;
  return winPercent;
}

console.log(calcWinPercent());
calcWinPercent();

function renderScoreboard() {
  let bestGame = document.getElementById('bestGame');
  let totalGames = document.getElementById('totalGames');
  let completedPercent = document.getElementById('completedPercent');
  console.log(bestGame);
  console.log(totalGames);
  console.log(completedPercent);
  bestGame.innerHTML = `Best Game: ${user.score}`;
  totalGames.innerHTML = `Games Played: ${user.games.length}`;
  completedPercent.innerHTML = `Percentage Of Games Completed: ${calcWinPercent()}%`;
}

renderScoreboard();
