import React from "react";
import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import "styles/auth.css";

const Auth = ({darkMode}) => {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className="authContainer">
      <i className="fas fa-hippo hippo authLogo"></i>
      <AuthForm darkMode={darkMode}/>
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className={darkMode? "authBtn dark" : "authBtn"}>
          <i className="fab fa-google"></i>
          <span className="authBtn_text">Sign In with Google</span>
        </button>
        <button onClick={onSocialClick} name="github" className={darkMode? "authBtn dark" : "authBtn"}>
          <i className="fab fa-github"></i>
          <span className="authBtn_text">Sign In with Github</span>
        </button>
      </div>
    </div>
  );
};

export default Auth;
