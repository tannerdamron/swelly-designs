import React from "react";
import "../../App.css";

function Navbar() {

  return (
    <div id="Nav">
      <p className="navLink">
        <a>Home</a>
      </p>
      <p className="navLink">
        <a>About</a>
      </p>
      <h1 className="homeTitle">Swelly Designs</h1>
      <p className="navLink">
        <a>Tech Stack</a>
      </p>
      <p className="navLink">
        <a>Contact</a>
      </p>
    </div>
  );
}

export default Navbar;
