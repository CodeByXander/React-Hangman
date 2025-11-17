// Function to display hangman images
function HangmanImage({ wrongGuesses }) {
  const maxState = 11;
  const imgNumber = Math.min(wrongGuesses + 1, maxState);

  return (
    <div>
      <img
        src={`/assets/hangmandrawings/state${imgNumber}.gif`}
        alt={`Hangman Step $imgNumber`}
        style={{ width: "250px" }}
      />
    </div>
  );
}

export default HangmanImage;
