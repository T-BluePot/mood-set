import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  getTokenFromFirebase,
  saveTokenToFirebase,
} from "../../utils/spotifyAuth";
import {
  getSpotifyLoginUrl,
  getAccessToken,
  getCodeFromUrl,
  refreshAccessToken,
} from "../../utils/spotify";
import { auth } from "../../firebase";

const LoginSeccess = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const checkAndFetchToken = async () => {
      const user = auth.currentUser;
      if (!user) {
        console.log("🚫 로그인된 사용자 없음!");
        return;
      }

      const savedTokenData = await getTokenFromFirebase();

      if (savedTokenData) {
        const { access_token, expires_at, refresh_token } = savedTokenData;

        // ✅ 만료되지 않았으면 기존 Access Token 사용
        if (Date.now() < expires_at) {
          console.log(
            "✅ Firestore에서 저장된 Access Token 사용:",
            access_token
          );
          setToken(access_token);
          return;
        }

        // ✅ 만료되었으면 Refresh Token으로 새로운 Access Token 요청
        const newTokenData = await refreshAccessToken(refresh_token);
        if (newTokenData) {
          setToken(newTokenData.access_token);
          saveTokenToFirebase(newTokenData);
        }
        return;
      }

      // ✅ Firestore에 토큰이 없으면 새로 로그인 & Access Token 요청
      const code = getCodeFromUrl();
      if (code) {
        getAccessToken(code).then((newTokenData) => {
          if (newTokenData) {
            setToken(newTokenData.access_token);
            saveTokenToFirebase(newTokenData);
          }
        });
      }
    };

    checkAndFetchToken();
  }, []);

  const handleLogin = () => {
    window.location.href = getSpotifyLoginUrl();
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-90 font-pretendard">
      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-white text-[36px]">스포티파이 로그인</p>
          <p className="text-white text-[18px]">
            서비스를 이용하기 위해선 스포티파이 로그인이 필요합니다.
          </p>
        </div>
        <button
          onClick={handleLogin}
          className="py-3 px-12 rounded-full bg-[#1ED760] text-[18px] text-black font-semibold"
        >
          스포티파이 접속
        </button>
      </div>
    </div>
  );
};

export default LoginSeccess;
