import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// firebase: auth
import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
// design
import "../../styles/logoAnimation.css";
import CancelIcon from "@mui/icons-material/Cancel";

const Main = () => {
  const navigate = useNavigate();

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [fillAccount, setFillAccount] = useState<boolean>(false);
  const [saveAccount, setSaveAccount] = useState<boolean>(false); // check box 관리

  useEffect(() => {
    if (id.trim() === "" || password.trim() === "") setFillAccount(false);
    else setFillAccount(true);
  }, [id, password]);

  const handleLogin = async () => {
    if (!fillAccount) return;
    try {
      const persistenceType = saveAccount
        ? browserLocalPersistence
        : browserSessionPersistence;
      await setPersistence(auth, persistenceType);
      await signInWithEmailAndPassword(auth, id, password);
      navigate("/seccess"); // 임시 페이지
    } catch (error) {
      if (error instanceof Error) {
        alert("로그인에 실패하였습니다.");
      }
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-90 font-pretendard">
        <div className="flex flex-col items-center gap-12 mb-12">
          {/* 메인 로고 */}
          <div className="w-[100px] h-[100px] rounded-full gradient-bg" />
          <div className="flex flex-col space-y-4 ">
            <div className="relative w-[400px] ">
              <input
                className="w-full h-[60px] p-4 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-main-hard-40 transition"
                placeholder="이메일"
                type="text"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <CancelIcon
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-30 cursor-pointer"
                onClick={() => setId("")}
              />
            </div>
            <div className="relative w-[400px] ">
              <input
                className="w-full h-[60px] p-4 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-main-hard-40 transition"
                placeholder="비밀번호"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <CancelIcon
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-30 cursor-pointer"
                onClick={() => setPassword("")}
              />
            </div>
            <label className="flex items-center text-gray-10 select-none">
              <input
                className="w-[20px] h-[20px] mr-2 bg-main-hard-40 p-3 rounded-md select-none cursor-pointer"
                type="checkbox"
                checked={saveAccount}
                onChange={() => setSaveAccount(!saveAccount)}
              />
              자동 로그인
            </label>
          </div>
        </div>
        <div>
          <button
            onClick={handleLogin}
            className={`w-[400px] h-[60px] items-center justify-center rounded-md text-white text-lg  ${
              fillAccount ? "bg-main-hard-40" : "bg-gray-40"
            }`}
          >
            로그인
          </button>
          <div className="flex justify-center items-center mt-6">
            <p
              onClick={() => {
                navigate("/signUp");
              }}
              className="text-white cursor-pointer"
            >
              회원가입
            </p>
            <span className="mx-3 h-[16px] border-l border-gray-10 " />
            <p className="text-white cursor-pointer">비밀번호</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
