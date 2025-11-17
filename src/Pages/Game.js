import React from "react";
// Import Components
import HangmanImage from "../Components/HangmanImage";
import WordDisplay from "../Components/WordDisplay";
import Keyboard from "../Components/Keyboard";

// Create state component
class Game extends React.Component {
  constructor(props) {
    super(props);

    // State attributes
    this.state = {
      secretWord: "",
      loading: true,
      wrongGuesses: 0,
      guessedLetters: [],
      maxWrong: 10,
      gameOver: false,
      gameStatus: null,
    };
  }

  // Load dictionary
  componentDidMount() {
    // Fetch and process txt file
    fetch("/assets/dictionary.txt")
      .then((response) => response.text())
      .then((text) => {
        const words = text.split("\n").map((word) => word.trim().toLowerCase());
        const filteredWords = words.filter((word) => word.length > 4 && word.length < 12);
        // Get random word
        const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];

        // Update state
        this.setState({
          secretWord: randomWord,
          loading: false,
        });
      });
  }

  // Handle Guess
  handleGuess(letter) {
    // Stop if game is over
    if (this.state.gameOver) {
      return;
    }

    // Get state
    const { guessedLetters, secretWord, wrongGuesses, maxWrong } = this.state;

    // If already guessed
    if (guessedLetters.includes(letter)) {
      return;
    }

    const updatedGuesses = [...guessedLetters, letter];

    let updatedWrong = wrongGuesses;

    // If letter is not in secret word (wrong guess)
    if (!secretWord.includes(letter)) {
      updatedWrong++;
    }

    // Check for loss
    if (updatedWrong >= maxWrong) {
      this.setState({
        guessedLetters: updatedGuesses,
        wrongGuesses: updatedWrong,
        gameOver: true,
        gameStatus: "lose",
      });

      return;
    }

    // Check for win
    const allLettersFound = secretWord.split("").every((char) => updatedGuesses.includes(char));

    if (allLettersFound) {
      this.setState({
        guessedLetters: updatedGuesses,
        wrongGuesses: updatedWrong,
        gameOver: true,
        gameStatus: "win",
      });
      return;
    }

    // Normal update (no win/no loss)
    this.setState({
      guessedLetters: updatedGuesses,
      wrongGuesses: updatedWrong,
    });
  }

  // Display on page
  render() {
    const { loading, secretWord } = this.state;

    if (loading) {
      return <p>Loading word...</p>;
    }

    return (
      <div>
        <h2>Hangman Game</h2>
        <HangmanImage wrongGuesses={this.state.wrongGuesses} />

        <WordDisplay secretWord={secretWord} guessedLetters={this.state.guessedLetters} />
        {this.state.gameOver && (
          <div className="result">
            {this.state.gameStatus === "win" ? (
              <p className="win">Congratulations! You guessed the word!</p>
            ) : (
              <p className="lose">You lost! The word was: {this.state.secretWord}</p>
            )}
          </div>
        )}

        <Keyboard
          guessedLetters={this.state.guessedLetters}
          onGuess={(letter) => this.handleGuess(letter)}
          disabled={this.state.gameOver}
        />

        <button className="restart-btn" onClick={() => window.location.reload()}>
          Play Again
        </button>
      </div>
    );
  }
}

export default Game;
