'use strict';

//Global variable and Functions and the Game Constructor and Functions

let wordBank = ['tiger', 'troll', 'words', 'water', 'bread', 'sweet'];
//Window into the DOM

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
