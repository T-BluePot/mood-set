import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase"; // Firebase 설정 import

// 🔥 Access Token 타입 정의
type SpotifyToken = {
  access_token: string;
  refresh_token: string;
  expires_at: number;
};

// 🔥 Firestore에 Access Token 저장
export const saveTokenToFirebase = async (tokenData: SpotifyToken) => {
  const user = auth.currentUser;
  if (!user) {
    console.error("❌ 로그인된 사용자가 없음!");
    return;
  }

  const userId = user.uid;
  try {
    await setDoc(doc(db, "users", userId), tokenData);
    console.log(
      `✅ Firestore에 Access Token 저장 완료! (사용자 ID: ${userId})`
    );
  } catch (error) {
    console.error("❌ Firebase 저장 실패:", error);
  }
};

// 🔥 Firestore에서 Access Token 가져오기
export const getTokenFromFirebase = async (): Promise<SpotifyToken | null> => {
  const user = auth.currentUser;
  if (!user) {
    console.error("❌ 로그인된 사용자가 없음!");
    return null;
  }

  const userId = user.uid;
  try {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data() as SpotifyToken;
    } else {
      console.log("🚫 저장된 Access Token 없음.");
      return null;
    }
  } catch (error) {
    console.error("❌ Firebase 가져오기 실패:", error);
    return null;
  }
};
