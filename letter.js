var Letter = function (letter) {
    this.letter = letter
    this.guessed = false;
    this.reveal = function () {
        if (this.guessed) {
            return this.letter
        } else {
            return "_"
        }
    }
    this.guess = function (guessedLetter) {
        if (guessedLetter == this.letter) {
            this.guessed = true;
        }
    }
}
module.exports = Letter;