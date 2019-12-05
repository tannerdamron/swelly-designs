import React from "react";
import "../../App.css";

import Button from "react-bootstrap/Button";

class Landing extends React.Component {
  componentDidMount() {
  }

  snapToHome() {
    document.getElementById("Nav").scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <div id="Landing">
        <div className="landingDiv">
          <p>
            Hello, My name is Tanner Damron.
            <br />I am a full stack web developer
          </p>
          <Button variant="outline-info" onClick={ this.snapToHome }>Check out my work!</Button>
        </div>
      </div>
    );
  }
}

export default Landing;