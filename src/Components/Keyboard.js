// Create variable for alphabet letters
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

// Function to display keyboard
function Keyboard({ guessedLetters, onGuess, disabled }) {
  return (
    <div className="keyboard">
      {/* Map letters to buttons */}
      {alphabet.map((letter) => (
        <button
          key={letter}
          className="key-button"
          onClick={() => onGuess(letter)}
          disabled={disabled || guessedLetters.includes(letter)}
        >
          {letter.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
