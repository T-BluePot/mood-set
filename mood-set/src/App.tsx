import React from "react";
import "./assets/css/color.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import { EmotionSelection } from "./pages/emotion/EmotionSelection";
import { EmotionDetail } from "./pages/emotion/EmotionDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
        <Route path="/EmotionSelection" element={<EmotionSelection />} />
        <Route path="/EmotionDetail" element={<EmotionDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
