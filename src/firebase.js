import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "",
  authDomain: "login-.firebaseapp.com",
  projectId: "login-",
  storageBucket: "login-.appspot.com",
  messagingSenderId: "",
  appId: "1::web:",
  measurementId: "G-",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// When Click pop up cominng
const provider = new GoogleAuthProvider();

//firestore初期化
const db = getFirestore();

export { auth, provider, db };
