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
        items={["about", "projects", "games", "contact"]}
        currentClassName="isCurrent"
      >
        <li className="hvr-grow-rotate navLink" onClick={this.snapToAbout}>
          About
        </li>
        <li className="hvr-grow-rotate navLink" onClick={this.snapToProjects}>
          Projects
        </li>
        <li className="hvr-grow-rotate navLink" onClick={this.snapToGames}>
          Games
        </li>
        <li className="hvr-grow-rotate navLink" onClick={this.snapToContact}>
          Contact
        </li>
      </Scrollspy>
    );
  }
}

export default Navbar;
