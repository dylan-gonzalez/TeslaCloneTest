import React from "react";

import { useState } from "react";
import { UserContext } from "../App.js";

// import "./Navbar.css";
import "./Navbar.scss";

const initialSliderState = {
  // left: 0,
  width: 0,
  opacity: 0
}

export default function Navbar() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [state, dispatch] = React.useContext(UserContext);
  const [sliderStyling, setSliderStyling ] = React.useState(initialSliderState);


  let slider = document.getElementById("slider");

  const toggleSideMenu = () => {
    console.log('test')
    dispatch({ type: "toggle_blur" });
    setShowSideMenu(!showSideMenu);


  };

  const navbarHoverOn = (e) => {
    setSliderStyling({...sliderStyling,left:e.target.offsetLeft, width: e.target.offsetWidth, opacity: 1});
    // console.log(e.pageX,);
  }

  const navbarHoverOff = (e) => {
    setSliderStyling({...sliderStyling, opacity: 0})

  }

  const checkClickEvent = (event) => {

    if (document.getElementsByClassName("side-menu")[0].classList.contains("show") && event.target.className !== "side-menu show" && event.target.className !== "menu-btn") {
        // setShowSideMenu(!showSideMenu);
        console.log("STATE: ", showSideMenu);


        toggleSideMenu();

    }
  };

  React.useEffect(() => {
    console.log("HEREJKKLJK")
    window.addEventListener("click", checkClickEvent);
    // window.addEventListener("click", toggleSideMenu);


    return () => {
      window.removeEventListener("click", checkClickEvent);
      // window.removeEventListener("click", toggleSideMenu);
    };
  }, []);

  React.useEffect(() => {
    console.log("Use effect", showSideMenu)

    document.body.style.overflow = `${showSideMenu ? "hidden" : ""}`

  },[showSideMenu])

  return (
    <div className="navbar">
      <div className = {`navbar-desktop ${state.blur_active ? "blur" : ""}`} onMouseLeave = {navbarHoverOff}>
        <img src="/tesla-logo.svg" />

        <ul>
          <li>
            <a onMouseEnter = {navbarHoverOn}><span>Model S</span></a>
          </li>
          <li>
            <a onMouseEnter = {navbarHoverOn}><span>Model 3</span></a>
          </li>
          <li>
            <a onMouseEnter = {navbarHoverOn}><span>Model X</span></a>
          </li>
          <li>
            <a onMouseEnter = {navbarHoverOn}><span>Model Y</span></a>
          </li>
          <li>
            <a onMouseEnter = {navbarHoverOn}><span>Cybertruck</span></a>
          </li>
          <li>
            <a onMouseEnter = {navbarHoverOn}><span>Powerwall</span></a>
          </li>

          <div id = "slider" style = {sliderStyling}>
            </div>
        </ul>
        <ul>
          <li>
            <a onMouseEnter = {navbarHoverOn}>Shop</a>
          </li>
          <li>
            <a onMouseEnter = {navbarHoverOn}>Account</a>
          </li>
          <li onClick={toggleSideMenu}>
            <a class = "menu-btn" href = "#" onMouseEnter = {navbarHoverOn}>Menu</a>
          </li>
        </ul>
      </div>

      <div className={`navbar-phone ${state.blur_active ? "blur" : ""}`}>
        <img src="/tesla-logo.svg" />

        <li onClick={toggleSideMenu}>
          <a class = "menu-btn">Menu</a>
        </li>
      </div>

      <div className={`side-menu ${state.blur_active ? "show" : ""}`}>
        <button class="close">
          <span onClick={toggleSideMenu} class="material-icons">
            close
          </span>
        </button>
        <ul>
          <li>
            <button>Corporate</button>
          </li>
          <li>
            <button>Existing Inventory</button>
          </li>
          <li>
            <button>Used Inventory</button>
          </li>
          <li>
            <button>Trade-In</button>
          </li>
          <li>
            <button>Powerwall</button>
          </li>
          <li>
            <button>Energy</button>
          </li>
          <li>
            <button>Commercial Energy</button>
          </li>
          <li>
            <button>Utilities</button>
          </li>
          <li>
            <button>Test Drive</button>
          </li>
          <li>
            <button>Charging</button>
          </li>
          <li>
            <button>Find Us</button>
          </li>
          <li>
            <button>Support</button>
          </li>
          <li>
            <button>Careers</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
