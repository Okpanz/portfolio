import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
function App() {
  return (
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
