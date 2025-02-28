import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <div className="bg-indigo min-vh-100 d-flex align-items-center justify-content-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
