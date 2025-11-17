import React from "react";
import { Link } from "react-router-dom";
import AnimatedHangman from "../Components/AnimatedHangman";

// Function to display Home content
function Home() {
  return (
    <div>
      <h2>Welcome to Hangman</h2>

      {/* Render Hanman Animation */}
      <AnimatedHangman />
      <p>Click “Play Game” to begin.</p>

      <Link to="/game">
        <button className="play-now-btn">Play Game</button>
      </Link>
    </div>
  );
}

export default Home;
