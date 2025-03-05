import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// util
import { getCodeFromUrl, getAccessToken } from "../../utils/spotify";
import { fetchUserPlaylists } from "../../utils/fetchPlaylist";

const PlayList = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(null);
  const [playlists, setPlaylists] = useState<any[]>([]); // 🔹 플레이리스트 저장할 상태

  const valence = 0.8; // 0.0 (슬픔) ~ 1.0 (행복)
  const energy = 0.7; // 0.0 (잔잔함) ~ 1.0 (활기참)

  return (
    <div>
      <h1>🎵 Mood-Based Song Recommendations</h1>
      {playlists.length > 0 ? (
        <ul>
          {playlists.map((song) => (
            <li key={song.id}>
              <img
                src={
                  song.album.images[0]?.url || "https://via.placeholder.com/50"
                }
                alt={song.name}
                width="50"
                height="50"
              />
              <p>
                {song.name} -
                {song.artists
                  .map((artist: { name: any }) => artist.name)
                  .join(", ")}
              </p>
              <audio controls>
                <source src={song.preview_url} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </li>
          ))}
        </ul>
      ) : (
        <p>🎶 추천된 노래를 불러오는 중...</p>
      )}
    </div>
  );
};

export default PlayList;
