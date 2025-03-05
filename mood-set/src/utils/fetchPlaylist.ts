import { getAccessToken } from "./spotify"; // 유틸 폴더에서 불러오기

export type Track = {
  id: string;
  name: string;
  artists: { name: string }[];
  album: {
    images: { url: string }[];
  };
  external_urls: {
    spotify: string;
  };
};

export const fetchUserPlaylists = async (
  token: string,
  valence: number,
  energy: number
) => {
  if (!token) {
    console.error("❌ Access Token 없음");
    return;
  }

  const response = await fetch(
    `https://api.spotify.com/v1/recommendations?limit=10&seed_genres=pop&target_valence=${valence}&target_energy=${energy}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  console.log("🎵 사용자의 플레이리스트:", data);
  return data.tracks;
};
