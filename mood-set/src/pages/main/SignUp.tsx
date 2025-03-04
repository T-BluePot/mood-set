import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// util
import { validateEmail } from "../../utils/validateEmail ";
// firebase
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// design
import CancelIcon from "@mui/icons-material/Cancel"; // 아이콘

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userName, setUserName] = useState<string>("");
  const [userId, setUserId] = useState<string>("");
  const [userPw, setUserPw] = useState<string>("");

  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [fillAccount, setFillAccount] = useState<boolean>(false); // input 태그 관리

  // input 공백 감지
  useEffect(() => {
    if (userName.trim() === "" || userId.trim() === "" || userPw.trim() === "")
      setFillAccount(false);
    else setFillAccount(true);
  }, [userName, userId, userPw]);

  // 페이지 접속 시 input 태그 초기화
  useEffect(() => {
    setUserName("");
    setUserId("");
    setUserPw("");
  }, [location.pathname]);

  const handleSignUp = async () => {
    try {
      if (!fillAccount) return;

      if (userPw.length < 6) {
        alert("비밀번호는 최소 6자리 이상이어야 합니다.");
        return;
      }

      // Firebase에 회원가입 요청
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userId,
        userPw
      );
      const user = userCredential.user;

      // 닉네임 저장 (User Profile 업데이트)
      await updateProfile(user, {
        displayName: userName,
      });

      alert("회원가입이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes("auth/email-already-in-use")) {
          alert("이미 가입된 이메일입니다.");
        } else {
          alert("회원가입에 실패하였습니다. 다시 시도해 주세요.");
        }
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-90 font-pretendard">
      <div className="flex flex-col items-center justify-center px-10 py-12 rounded-[12px] bg-black/10">
        <p className="text-[40px] mb-12 tracking-tighter text-white font-semibold select-none">
          회원 가입
        </p>
        <div className="mb-12">
          <div className="flex flex-col space-y-4">
            <div>
              <div className="relative w-[400px]">
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
            </div>
            <div>
              <div className="relative w-[400px] ">
                <input
                  className="w-full h-[60px] p-4 pr-12 rounded-md focus:outline-none focus:ring-2 focus:ring-main-hard-40 transition"
                  placeholder="이메일"
                  type="email"
                  value={userId}
                  onChange={(e) => {
                    setUserId(e.target.value);
                    setIsValid(validateEmail(e.target.value));
                  }}
                />
                <CancelIcon
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-30 cursor-pointer"
                  onClick={() => setUserId("")}
                />
              </div>
              {userId !== "" && isValid !== null && !isValid && (
                <p className="text-main-red mt-1">
                  이메일 형식이 올바르지 않습니다.
                </p>
              )}
            </div>

            <div>
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
              {userPw !== "" && userPw.length < 6 && (
                <p className="text-main-red mt-1">
                  비밀번호는 최소 6자 이상 작성해야 합니다.
                </p>
              )}
            </div>
          </div>
        </div>
        <div>
          <button
            onClick={handleSignUp}
            className={`w-[400px] h-[60px] items-center justify-center rounded-md text-white text-lg  ${
              fillAccount ? "bg-main-hard-40" : "bg-gray-40"
            }`}
          >
            회원 가입
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
