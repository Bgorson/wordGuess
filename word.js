var Letter = require("./letter")
var Word = function (chosenWord) {
    this.word= chosenWord
    this.wordArray = [];
    for (var i = 0; i < chosenWord.length; i++) {
        var letter = new Letter((chosenWord[i]))
        this.wordArray.push(letter)
    }
    this.wordDisplay = function () {
        var wordStringArray = [];
        for (var i = 0; i < this.wordArray.length; i++) {
            wordStringArray.push(this.wordArray[i].reveal())
        }
        wordStringArray = wordStringArray.slice(',').join(' ')
        return wordStringArray

    }
    this.letterGuess = function (letterGuess) {
        for (var i = 0; i < this.wordArray.length; i++) {
            this.wordArray[i].guess(letterGuess)
        }
    }
}
module.exports = Word;