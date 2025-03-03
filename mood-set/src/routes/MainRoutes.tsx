import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "../pages/main/Main";
import SignUp from "../pages/main/SignUp";
import LoginSeccess from "../pages/main/LoginSuccessPage";

const MainLayout = () => {
  return (
    <div>
      <Outlet /> {/* 자식 라우트가 렌더링될 위치 */}
    </div>
  );
};

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        {/* ✅ '/'일 때만 Main 보이도록 설정 */}
        <Route path="signUp" element={<SignUp />} />
        <Route path="seccess" element={<LoginSeccess />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
