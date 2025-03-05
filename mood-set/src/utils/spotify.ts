// spotify Access Token을 가져오기
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID!;
const REDIRECT_URI =
  process.env.REACT_APP_SPOTIFY_REDIRECT_URI ||
  "http://localhost:3000/playlist";
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET!;

const SCOPES = [
  "user-read-private",
  "user-read-email",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-modify-private",
].join("%20");

// 사용자 spotify 로그인
export const getSpotifyLoginUrl = (): string => {
  return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${SCOPES}`;
};

// 🔥 Access Token 타입 정의
type SpotifyToken = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
};

// 🔥 로그인 후 Access Token 요청
export const getAccessToken = async (
  code: string
): Promise<SpotifyToken | null> => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: REDIRECT_URI,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });

  const data = await response.json();

  if (data.access_token) {
    const expiresAt = Date.now() + data.expires_in * 1000; // 현재 시간 + 만료 시간(초)

    return {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_at: expiresAt,
    };
  } else {
    console.error("❌ Access Token 발급 실패:", data);
    return null;
  }
};

// 리디렉트된 URL에서 Authorization Code 추출
export const getCodeFromUrl = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("code");
};
