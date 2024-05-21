class Wordle {
    constructor(hiddenWord) {
      this.hiddenWord = hiddenWord.toLowerCase();
      this.guessesLeft = 6;
      this.guesses = new Set();
    }
  
    makeGuess(guess) {
      guess = guess.toLowerCase();
      
      if (this.guesses.has(guess)) {
        console.log("You already guessed that!");
        return;
      }
  
      this.guesses.add(guess);
  
      let feedback = this.getFeedback(guess);
  
      this.guessesLeft--;
  
      if (feedback === 'Correct!') {
        console.log("Congratulations! You guessed the word:", this.hiddenWord);
      } else if (this.guessesLeft === 0) {
        console.log("Sorry, you're out of guesses. The word was:", this.hiddenWord);
      } else {
        console.log(feedback + ". You have " + this.guessesLeft + " guesses left.");
      }
    }
  
    getFeedback(guess) {
      if (guess === this.hiddenWord) {
        return 'Correct!';
      }
  
      let feedback = '';
      for (let i = 0; i < this.hiddenWord.length; i++) {
        if (this.hiddenWord[i] === guess[i]) {
          feedback += guess[i].toUpperCase();
        } else if (this.hiddenWord.includes(guess[i])) {
          feedback += guess[i];
        } else {
          feedback += '-';
        }
      }
      return feedback;
    }
  }
  
  // Example usage:
  const wordleGame = new Wordle("apple");
  wordleGame.makeGuess("apricot");
  wordleGame.makeGuess("orange");
  wordleGame.makeGuess("apple");
  