# Word Guess (a.k.a Hangman)

This is a basic hangman game that utilizes the terminal to function. 

Users should start the application by installing the necessary packages with ``npm install``

Using the terminal command ``node index.js`` users can guess the mystery word. 

Users get 5 incorrect guesses before they lose. The terminal will display the letters already guessed and how far along you are to completing the word. Users are then given an opportnuity to reset the game and a new word is created. 


### How it works

Two constructors are used in order for this game to function. Each letter is an object with values and the word contains these object letters and additioinal methods. User input will toggle the letters to display their corresponding letter of the word until all letters are chosen. 

Also watch a video here for additional assistance: 
https://drive.google.com/file/d/1OqM6Sm8Vk63lJvmrbeYzPowcrRwyn0Zo/view
