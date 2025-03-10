# 🎵 mood set
**"사용자의 감정으로 플레이리스트를 물들여 보세요."**  
React + TypeScript + Spotify API를 활용한 감정 기반 음악 추천 웹사이트입니다.

---

## 📝 개요 (Overview)
이 프로젝트는 사용자의 감정을 기반으로 맞춤 음악을 추천하는 웹 애플리케이션입니다.  
Spotify API를 활용하여 실시간으로 감정에 맞는 플레이리스트를 제공합니다.  

- **사용 기술**: React, TypeScript, Firebase, Spotify API
- **목표**: 기분에 따른 맞춤형 음악 경험 제공  
- **특징**: 감정 분석 → 플레이 리스트 생성 → 플레이 리스트 저장

---

## 💡 아이디어 (Idea)
### 🎭 **왜 감정 기반 음악 추천인가?**
음악은 우리의 감정을 반영하고 변화시킬 수 있습니다.  
이 프로젝트는 사용자가 현재의 감정을 선택하면,  
그에 맞는 플레이리스트를 제공하여 더 깊은 음악적 경험을 선사합니다.  

🎵 기분이 우울할 때 → 위로가 되는 음악 추천  
🔥 신나는 에너지가 필요할 때 → 강렬한 비트의 음악 추천  

#### 🎯 **이 프로젝트가 해결하는 문제**
✅ "지금 내 기분에 맞는 음악을 찾기 어려워!"  
✅ "너무 많은 플레이리스트 중에서 뭘 들어야 할지 모르겠어!"  
✅ "기분에 따라 플레이리스트를 자동으로 추천받고 싶어!"  

---

## 🚀 주요 기능 (Key Features)
🔹 **감정 선택 (Emotion Selection)**  
사용자가 기분을 선택하면, 해당 감정에 맞는 음악을 추천합니다.  

🔹 **Spotify API 기반 추천 시스템**  
감정별 `valence(밝기)`와 `energy(에너지)` 값을 분석하여 적절한 음악을 제공합니다.  

🔹 **Firebase 기반 사용자 데이터 저장**  
로그인한 사용자는 자신만의 추천 플레이리스트를 저장할 수 있습니다.  

---

## 🛠️ 기술적 사항 (Technical Details)
| 기술 | 설명 |
|------|------|
| **React + TypeScript** | 빠르고 안전한 UI 개발 |
| **Google API** | 사용자 감정 분석 및 음악 추천 |
| **Spotify Web API** | 음악 재생 |
| **Firebase Authentication** | 사용자 계정 관리 |
| **React Query** | API 데이터 최적화 및 캐싱 |
