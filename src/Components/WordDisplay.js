// Function to display Blank letters and Correct letters
function WordDisplay({ secretWord, guessedLetters }) {
  return (
    <div className="word-display">
      {secretWord.split("").map((letter, index) => {
        const isGuessed = guessedLetters.includes(letter);

        return (
          // If letter is correct, display, else display _
          <span key={index} className="word-letter">
            {isGuessed ? letter.toUpperCase() : "_"}
          </span>
        );
      })}
    </div>
  );
}

export default WordDisplay;
