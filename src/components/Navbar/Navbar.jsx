import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../App.css";

function Navbar() {

  return (
    <div className="Nav">
      <p className="navLink">
        <Link to="/">Home</Link>
      </p>
      <p className="navLink">
        <Link to="/about">About Page</Link>
      </p>
      <h1 className="homeTitle">Swelly Designs</h1>
      <p className="navLink">
        <Link to="/">Contact</Link>
      </p>
      <p className="navLink">
        <Link to="/about">Tech Stack</Link>
      </p>
    </div>
  );
}

export default Navbar;
