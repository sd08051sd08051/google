import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuEXp2DjXNGuz9FDUoyaOz8eKW5SgUwtU",
  authDomain: "login-fa283.firebaseapp.com",
  projectId: "login-fa283",
  storageBucket: "login-fa283.appspot.com",
  messagingSenderId: "496608187867",
  appId: "1:496608187867:web:4fd23e6659a818da4603fe",
  measurementId: "G-1NNKZTDKE5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// When Click pop up cominng
const provider = new GoogleAuthProvider();

//firestore初期化
const db = getFirestore();

export { auth, provider, db };
