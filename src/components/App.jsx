import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import Profile from "./Profile";
import Settings from "./Settings";

function App() {
  const [user, setUser] = useState({
    name: "John Carlo Modelo",
    settings: {
      darkMode: false,
    },
  });

  useEffect(() => {
    document.body.className = user.settings.darkMode ? "bg-dark text-white" : "bg-light text-dark";
  }, [user.settings.darkMode]);

  return (
    <Router>
      <div className="min-vh-100">
        <nav className={`navbar navbar-expand-lg ${user.settings.darkMode ? "navbar-dark bg-dark" : "navbar-light bg-primary"} p-3`}>
          <div className="container">
            <Link className="navbar-brand text-white" to="/">Home</Link>
            <div>
              <Link className="nav-link d-inline-block text-white me-3" to="/profile">Profile</Link>
              <Link className="nav-link d-inline-block text-white" to="/settings">Settings</Link>
            </div>
          </div>
        </nav>
        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/settings" element={<Settings user={user} setUser={setUser} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
