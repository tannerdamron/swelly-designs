import React from "react";
import "../../App.css";

import Scrollspy from "react-scrollspy";

class Navbar extends React.Component {
  snapToHome() {
    document.getElementById("Landing").scrollIntoView({ behavior: "smooth" });
  }

  snapToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }

  snapToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }

  snapToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  snapToGames() {
    document.getElementById("games").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <Scrollspy
        className="scrollspy"
        items={["about", "projects", "nothing", "games", "contact"]}
        currentClassName="isCurrent"
      >
        <li className="navLink" onClick={this.snapToAbout}>
          About
        </li>
        <li className="navLink" onClick={this.snapToProjects}>
          Projects
        </li>
        <h1 className="homeTitle" onClick={this.snapToHome}>
          Swelly Designs
        </h1>
        <li className="navLink" onClick={this.snapToGames}>
          Games
        </li>
        <li className="navLink" onClick={this.snapToContact}>
          Contact
        </li>
      </Scrollspy>
    );
  }
}

export default Navbar;
