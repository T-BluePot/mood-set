import React from "react";
import "./assets/css/color.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// Page List
import MainRoutes from "./routes/MainRoutes";
import { EmotionSelection } from "./pages/emotion/EmotionSelection";
import { EmotionDetail } from "./pages/emotion/EmotionDetail";
import PlayList from "./pages/playList/PlayList";

// queryClient:  API 요청을 관리하는 객체
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/*" element={<MainRoutes />} />
          <Route path="/EmotionSelection" element={<EmotionSelection />} />
          <Route path="/EmotionDetail" element={<EmotionDetail />} />
          <Route path="/playlist" element={<PlayList />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
