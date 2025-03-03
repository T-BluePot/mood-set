import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// design
import CancelIcon from "@mui/icons-material/Cancel";

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  const [fillAccount, setFillAccount] = useState<boolean>(false);

  useEffect(() => {
    if (userName.trim() === "" || userId.trim() === "" || userPw.trim() === "")
      setFillAccount(false);
    else setFillAccount(true);
  }, [userName, userId, userPw]);

  useEffect(() => {
    setUserName("");
    setUserId("");
    setUserPw("");
  }, [location.pathname]);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-90 font-pretendard">
      <div className="flex flex-col items-center justify-center px-10 py-12 rounded-[12px] bg-black/10">
        <p className="text-[40px] mb-12 tracking-tighter text-white font-semibold select-none">
          회원 가입
        </p>
        <div className="mb-12">
          <div className="flex flex-col space-y-4 ">
            <div className="relative w-[400px] ">
              <input
                className="w-full h-[60px] p-4 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-main-hard-40 transition"
                placeholder="닉네임"
                type="text"
                autoComplete="additional-name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <CancelIcon
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-30 cursor-pointer"
                onClick={() => setUserName("")}
              />
            </div>
            <div className="relative w-[400px] ">
              <input
                className="w-full h-[60px] p-4 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-main-hard-40 transition"
                placeholder="이메일"
                type="email"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
              <CancelIcon
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-30 cursor-pointer"
                onClick={() => setUserId("")}
              />
            </div>
            <div className="relative w-[400px] ">
              <input
                className="w-full h-[60px] p-4 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-main-hard-40 transition"
                placeholder="비밀번호"
                type="password"
                value={userPw}
                onChange={(e) => setUserPw(e.target.value)}
              />
              <CancelIcon
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-30 cursor-pointer"
                onClick={() => setUserPw("")}
              />
            </div>
          </div>
        </div>
        <div>
          <button
            className={`w-[400px] h-[60px] items-center justify-center rounded-md text-white text-lg  ${
              fillAccount ? "bg-main-hard-40" : "bg-gray-40"
            }`}
          >
            로그인
          </button>
          <div className="flex justify-center items-center space-x-2 mt-6">
            <p className="text-white">이미 계정이 있나요?</p>
            <p
              onClick={() => {
                navigate("/");
              }}
              className="text-main-hard-40 underline font-bold cursor-pointer"
            >
              로그인
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
