import React from "react";
import AuthForm from "components/AuthForm";
import { authService, firebaseInstance } from "fbase";
import "styles/auth.css";

const Auth = () => {
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
      <i className="fab fa-twitter authLogo"></i>
      <AuthForm />
      <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          Continue with Google
          <i className="fab fa-google"></i>
        </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          Continue with Github
          <i className="fab fa-github"></i>
        </button>
      </div>
    </div>
  );
};

export default Auth;
