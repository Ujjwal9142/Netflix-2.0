import { signInWithEmailAndPassword } from "@firebase/auth";
import React, { useRef, useState } from "react";
import { auth } from "../firebase";
import "./SignInScreen.css";
import SignUpScreen from "./SignUpScreen";

const SignInScreen = ({ loginEmail, setLoginEmail }) => {
  const [issignUp, setIsSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log("User is signed In");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setIsSignUp(true);
  };

  return (
    <div className="signInScreen__body">
      {issignUp ? (
        <SignUpScreen setIsSignUp={setIsSignUp} />
      ) : (
        <>
          <div className="signinScreen">
            <form>
              <h1>Sign In</h1>
              <input
                ref={emailRef}
                placeholder="Email"
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
              <input ref={passwordRef} placeholder="Password" type="password" />
              <button type="submit" onClick={signIn}>
                Sign In
              </button>
              <h4>
                <span className="signinScreen__gray">New to Netflix? </span>
                <span
                  className="signinScreen__link"
                  onClick={(e) => handleSignUp(e)}
                >
                  Sign Up now.
                </span>
              </h4>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default SignInScreen;
