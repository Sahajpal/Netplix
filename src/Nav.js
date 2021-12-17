import React from "react";
import "./Nav.css";
import { useEffect, useState } from "react";

function Nav() {
const [show, handleShow] = useState(false);

const transitionNavBar = () => {
  if(window.scrollY > 100){
    handleShow(true);
  } else {
    handleShow(false);
  }
}

useEffect(() => {
  window.addEventListener("scroll", transitionNavBar);
  return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          className="nav_logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav_avatar"
          src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;