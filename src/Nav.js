import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => {
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);
  return (
    <div className={`nav  ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          onClick={() => history.push("/")}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        ></img>
        <img
          className="nav__avatar"
          onClick={() => history.push("/profile")}
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Logo"
        ></img>
      </div>
    </div>
  );
};

export default Nav;
