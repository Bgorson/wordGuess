// * **index.js**: The file containing the logic for the course of the game,
//  which depends on `Word.js` and:

//   * Randomly selects a word and uses the `Word` constructor to store it

//   * Prompts the user for each guess and keeps track of the user's
//  remaining guesses

var inquirer = require('inquirer');
var Word = require('./word.js')
var wordChoices = ["ruby","emerald","sapphire","opal",'garnet','aquamarine','topaz','pearl','diamond','amethyst','citrine','peridot']
var item = wordChoices[Math.floor(Math.random()*wordChoices.length)]
var guesses = 5;
var guessedArray= [];
var chosenWord= new Word(item)
console.log(chosenWord.wordDisplay());
var newGame= function(){
  item = wordChoices[Math.floor(Math.random()*wordChoices.length)]
  guesses=5;
  guessedArray=[];
  chosenWord= new Word(item)
  console.log(chosenWord.wordDisplay());
  gamePlay();
}
var gamePlay= function(){
  console.log("\n\n******************")
  console.log("You've guessed: "+ guessedArray.slice(',').join(' ') )
if (guesses <= 0) {
  console.log("===================")
  console.log("You lost")
  console.log("The word was: "+ chosenWord.word)
  console.log("===================")
  inquirer.prompt([
    {
      type:"confirm",
      message: "Do you want to play again?",
      name: "confirm",
      default:true
    }
  ]).then(function(response){
    if(response.confirm== false){
      return false;
    }
    else {
    newGame();
    }
  })
}
else if ((chosenWord.wordDisplay().indexOf("_") == -1)) {
  console.log("===================")
  console.log("*****Congrats!*****")
  console.log("===================")
  inquirer.prompt([
    {
      type:"confirm",
      message: "Do you want to play again?",
      name: "confirm",
      default:true
    }
  ]).then(function(response){
    if(response.confirm== false){
      return false;
    }
    newGame();
  })
}
else {
inquirer
  .prompt([
    {
     name: "guess",
     message: "Guess a letter"   
    }
  ])
  .then(response => {
   chosenWord.letterGuess(response.guess)
   console.log("\n\n===================\n")
   console.log(chosenWord.wordDisplay());
   if (chosenWord.word.indexOf(response.guess) == -1){
       if(guessedArray.indexOf(response.guess)== -1){
         guessedArray.push(response.guess)}
       guesses -=1
   }
   console.log("\nYou have "+ guesses + "left!")
   gamePlay();
    })
}

}
gamePlay();