# Software Requirements

## Vision

1. What is the vision of this product? 

   - To create a fun interactive word game.

2. What pain point does this project solve?

  - To cure boredom, expand vocabulary, and to be more challenging than wordle.

3. Why should we care about your product?

  - Simply for the fact that it's better than wordle.

## Scope (In/Out)

1. IN - What will your product do
   
  - Describe the individual features that your product will do.
    
    - Guess a word. Verify if the correct word is correct. Determine how many correct letters were selected. 
   
  - High overview of each. Only need to list 4-5

   - You'll be able to guess a 5 letter word. It'll give clues as to what the next word is. There will be a user scoreboard. Store user information in localStorage.

2. OUT - What will your product not do.
  
  - These should be features that you will make very clear from the beginning that you will not do during development. These should be limited and very few. Pick your battles wisely.
  
   - Two features that will not be included in development are we not pulling from external database. We won't be including spellcheck. 

## Minimum Viable Product vs

1. What will your MVP functionality be?

  - Insuring you will be able to guess five words, give hints, and let user know if letters are correct. 

2.  What are your stretch goals?

  - Smooth transitions across pages. Animations on pigs and bull. Want them to roll across page and hop on page. Add sound cues.

## Stretch

1. What stretch goals are you going to aim for?

  - Animations on pigs and bull. 

## Functional Requirements: List the functionality of your product.

  - User will be able to guess a word.

  - User will be able to continue their game.

  - User will be able to verify if they have the correct letter.

## Data Flow

1. Describe the flow of data in your application. Write out what happens from the time the user begins using the app to the time the user is done with the app. Think about the “Happy Path” of the application. Describe through visuals and text what requests are made, and what data is processed, in addition to any other details about how the user moves through the site.

  - When the user starts the game the program choses a word from the database and waits for the user input. When the user inputs the 5 letter word the program checks compares it to the chosen words and returns pigs and bulls based on the amount of correct letters. Then is users guess is correct the program will updates amount of games user has completed as well as the users high score. 
