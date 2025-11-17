import { Link } from "react-router-dom";
import "../styles/header.css";

// Display Header with nav
function Header() {
  return (
    <header className="header">
      <h1 className="header-title">React Hangman</h1>

      {/* Navigation */}
      <nav className="header-nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/game" className="nav-link">
          Play Game
        </Link>
        <Link to="/help" className="nav-link">
          Help
        </Link>
      </nav>
    </header>
  );
}

export default Header;
