import { createUserWithEmailAndPassword } from "@firebase/auth";
import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";

const SignUpScreen = ({ setIsSignUp }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("User is signed up");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSignUp(false);
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={register}>
          Sign Up
        </button>
        <h4>
          <span className="signupScreen__gray">Have an account? </span>
          <span className="signupScreen__link" onClick={(e) => handleSignUp(e)}>
            Sign In instead.
          </span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
