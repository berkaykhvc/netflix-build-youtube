import React, { useEffect, useState } from 'react'
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function Nav() {
const [show, handleShow] = useState(false);
const history = useNavigate();

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    }
    else {
        handleShow(false);
    }
};

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, [])


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img 
          onClick={() => history("/")}
          className="nav__logo" 
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
          alt=""
          >
        </img>
        <img
          onClick={() => history("/profile")} 
          className="nav__avatar" 
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg" 
          alt=""
          >
        </img>
      </div>
    </div>
  )
}

export default Nav