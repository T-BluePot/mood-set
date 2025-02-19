import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { EmotionSelection } from "./pages/emotion/EmotionSelection";
import { EmotionDetail } from "./pages/emotion/EmotionDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/EmotionSelection" element={<EmotionSelection/>}/>
        <Route path="/EmotionDetail" element={<EmotionDetail/>}/>
      </Routes>
    </Router>
  );
}

export default App;
