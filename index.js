// * **index.js**: The file containing the logic for the course of the game,
//  which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's
//  remaining guesses

var inquirer = require('inquirer');
var Word = require('./word.js')
var wordChoices = ["hello"]
var guesses = 10;
var chosenWord= new Word(wordChoices[0])

var gamePlay= function(){
if (guesses > 0 && (chosenWord.wordDisplay().indexOf("_") != -1)){
inquirer
  .prompt([
    {
     name: "guess",
     message: "Guess a letter"   
    }
  ])
  .then(response => {
   chosenWord.letterGuess(response.guess)
   console.log(chosenWord.wordDisplay());
   if (chosenWord.word.indexOf(response.guess) == -1){
       guesses -=1
   }
   console.log("You have "+ guesses + "left!")
   gamePlay();
    })
}

}
gamePlay();