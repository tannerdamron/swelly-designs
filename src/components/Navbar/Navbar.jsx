import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import "../../App.css";

function Navbar() {
  return (
    <div className="Nav">
      <img className="swellyLogo" src={logo} alt=""></img>
      <h1 className="homeTitle">Swelly Designs</h1>
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/about">
        <button className="navButton">About Page</button>
      </Link>
      <Link to="/">
        <button className="navButton">Home</button>
      </Link>
      <Link to="/about">
        <button className="navButton">About Page</button>
      </Link>
    </div>
  );
}

export default Navbar;
