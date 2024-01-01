import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAu*****************",
  authDomain: "login-***************",
  projectId: "login-f***************",
  storageBucket: "login-fa2*********",
  messagingSenderId: "49660818******",
  appId: "1:496608187867:we*********",
  measurementId: "G-1NNKZTD*********",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// When Click pop up cominng
const provider = new GoogleAuthProvider();

//firestore初期化
const db = getFirestore();

export { auth, provider, db };
