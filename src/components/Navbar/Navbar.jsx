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

  render() {
    return (
        <Scrollspy
          className="scrollspy"
          items={["Landing", "about", "nothing", "projects", "contact"]}
          currentClassName="isCurrent"
        >
          <li className="navLink" onClick={this.snapToHome}>
            Home
          </li>
          <li className="navLink" onClick={this.snapToAbout}>
            About
          </li>
          <h1 className="homeTitle">Swelly Designs</h1>
          <li className="navLink"  onClick={this.snapToProjects}>
            Projects
          </li>
          <li className="navLink"  onClick={this.snapToContact}>
            Contact
          </li>
        </Scrollspy>
    );
  }
}

export default Navbar;
