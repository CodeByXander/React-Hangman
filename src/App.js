// Import React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Import Header component
import Header from "./Components/Header";

// Import pages
import Home from "./Pages/Home";
import Game from "./Pages/Game";
import Help from "./Pages/Help";

// Import CSS
import "../src/styles/App.css";

// Main function
function App() {
  return (
    <BrowserRouter>
      {/* Render Header */}
      <Header />

      {/* Set routes */}
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
