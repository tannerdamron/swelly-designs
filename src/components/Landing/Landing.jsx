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
            <br />I am a certified full stack web and mobile developer.
          </h2>
          <Button
            className="landingButton"
            variant="outline-dark"
            size="lg"
            onClick={this.snapToHome}
          >
            Check out my work!
          </Button>
          <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;