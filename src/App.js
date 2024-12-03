import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const location = useLocation(); // Get the current location

  return (
    <div>
      {/* Conditionally render the navigation bar */}
      {location.pathname !== "/login" && (
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

// Wrapper component to use `useLocation` with `Router`
function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
