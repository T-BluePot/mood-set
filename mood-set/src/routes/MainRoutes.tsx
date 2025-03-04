import React from "react";
import { useState, useEffect } from "react";

import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../firebase";

import { Routes, Route, Outlet, Navigate, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  /* firebase의 자동 로그인 로직
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []); */

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Main />} />
        {/* ✅ '/'일 때만 Main 보이도록 설정 */}
        <Route path="signUp" element={<SignUp />} />
        <Route path="seccess" element={<LoginSeccess />} />

        {/* ✅ 로그인 상태에 따라 '/'에서 리디렉트 
        <Route
          index
          element={user ? <Navigate to="/seccess" replace /> : <Main />}
        />

         로그인한 사용자는 회원가입 페이지 접근 불가 
        <Route
          path="signUp"
          element={user ? <Navigate to="/" replace /> : <SignUp />}
        />

        로그인한 경우 로그인 성공 페이지 유지, 아니면 '/'로 리디렉트 
        <Route
          path="seccess"
          element={user ? <LoginSeccess /> : <Navigate to="/" replace />}
        />*/}
      </Route>
    </Routes>
  );
};

export default MainRoutes;
