// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBoAHfdATF4o7Ct5O2NK9lYq88JmAh6fDo",
  authDomain: "mood-set-f2239.firebaseapp.com",
  projectId: "mood-set-f2239",
  storageBucket: "mood-set-f2239.firebasestorage.app",
  messagingSenderId: "826542357279",
  appId: "1:826542357279:web:54bdb71967a99461368e2a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
