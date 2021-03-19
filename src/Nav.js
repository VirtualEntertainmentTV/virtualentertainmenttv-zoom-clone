import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
const [show, handleShow] = useState(false);
const history = useHistory();

const transitionNavBar = () => {
  if (window.scrollY > 100) {
      handleShow(true);
  } else {
      handleShow(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", transitionNavBar);
  return () => window.removeEventListener('scroll', transitionNavBar)
}, []);

 return (
   <div className={`nav ${show && 'nav_black'}`}>
      <div className="nav_contents">
       <img 
        onClick={() => history.push("/")}
          className="nav_logo" src="https://i.ibb.co/XFbLsBJ/VETTrans.png" alt="" />

       <img 
        onClick={() => history.push('/profile')}
          className="nav_avatar" src="https://i.ibb.co/6ZNZd4n/ usericon.png" alt="" />
      </div>
   </div>
 );
}

export default Nav;
       