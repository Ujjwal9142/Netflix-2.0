import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
import Smiley from "./assets/smiley.png";
import NetflixWiki from "./assets/netflixwiki.png";

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
          src={NetflixWiki}
          alt="Netflix Logo"
        ></img>
        <img
          className="nav__avatar"
          onClick={() => history.push("/profile")}
          src={Smiley}
          alt="Logo"
        ></img>
      </div>
    </div>
  );
};

export default Nav;
