import React from "react";
import "../../App.css";

import Button from "react-bootstrap/Button";

class Landing extends React.Component {
  componentDidMount() {
  }

  snapToHome() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <div id="Landing">
        <div className="landingDiv">
          <h2>
            Welcome to Swelly Designs, My name is Tanner Damron.
            <br />I am a certified full stack web developer.
          </h2>
          <Button variant="outline-dark" size="lg" onClick={ this.snapToHome }>Check out my work!</Button>
        </div>
      </div>
    );
  }
}

export default Landing;