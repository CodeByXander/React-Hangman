// Display help page
function Help() {
  return (
    <div className="help-page">
      <h2>How to Play Hangman</h2>
      <p>The goal of the game is to guess the hidden word, one letter at a time.</p>

      <h3>Rules:</h3>
      <ul>
        <li>The game picks a random secret word.</li>
        <li>You guess letters using the on-screen keyboard.</li>
        <li>If your guess is in the word, it appears in the blanks.</li>
        <li>Every wrong guess adds a piece to the hangman drawing.</li>
        <li>If you reach the final drawing, you lose.</li>
        <li>If you guess all the letters before that, you win!</li>
      </ul>

      <h3>Tips:</h3>
      <ul>
        <li>Look for common vowels: A, E, I, O, U.</li>
        <li>Then try common consonants like N, R, S, T, L.</li>
      </ul>

      <p>Good luck and have fun!</p>
    </div>
  );
}

export default Help;
