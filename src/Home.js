import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Home;

// サインインのボタンの定義関数

function SignInButton() {
  const signInWithGoogle = () => {
    // ここにFireBaseを使ってGoogleログインする
    signInWithPopup(auth, provider);
  };
  return (
    <button onClick={signInWithGoogle}>
      <p>Google Sign In</p>
    </button>
  );
}
// サインOutのボタンの定義関数;

function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>Google Sign Out</p>
    </button>
  );
}

// function UserInfo() {
//   return (
//     <div className="userInfo">
//       <img src={auth.currentUser.photoURL} alt="" />
//       <p>{auth.currentUser.displayName}</p>
//     </div>
//   );
// }

function UserInfo() {
  const user = auth.currentUser;

  if (!user) {
    // ユーザーが存在しない場合の処理
    return null;
  }

  return (
    <div className="userInfo">
      <img src={user.photoURL} alt="" />
      <p>{user.displayName}</p>
    </div>
  );
}
