import React from "react";
// import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="logo-container">
    <img src={logo} alt="Pixel Diaries Logo" className="logo" />
    <ul>
        {/* <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/categories">Categories</Link></li> */}
        {/* <li><Link to="/profile">Profile</Link></li> */}
      </ul>
   </div>
  );
}

export default Navbar;
