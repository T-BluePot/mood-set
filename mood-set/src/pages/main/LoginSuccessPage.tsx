import React from "react";
import { useNavigate } from "react-router-dom";
import pikachu from "../../assets/images/pikachu.png";

const LoginSeccess = () => {
  const navigate = useNavigate();

  type EmotionType = {
    tag: string;
    valence: number;
    energy: number;
  };

  const emotions: EmotionType[] = [
    { tag: "행복", valence: 0.8, energy: 0.7 },
    { tag: "슬픔", valence: 0.1, energy: 0.2 },
    { tag: "신남", valence: 0.95, energy: 0.35 },
  ];

  const handleSelectEmotion = (emotion: EmotionType) => {
    navigate(`/playlist`, {
      state: { valence: emotion.valence, energy: emotion.energy },
    });
  };

  return (
    <div>
      <p>로그인 성공을 축하합니다</p>
      <p>오늘의 감정은 뭘까요~?</p>
      <img src={pikachu} alt="피, 피카츄~!" />
      <div className="flex items-start space-x-4">
        {emotions.map((emotion) => (
          <button
            className="w-[100px] h-[100px] rounded-full bg-main-hard-40 text-white"
            key={emotion.tag}
            onClick={() => handleSelectEmotion(emotion)}
          >
            {emotion.tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LoginSeccess;
