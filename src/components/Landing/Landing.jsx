import React from "react";
import "../../App.css";

import Button from "react-bootstrap/Button";

import waveMid from "../../assets/wave-mid.png";
import waveBot from "../../assets/wave-bot.png";

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
            <br />I am a certified full stack web and mobile developer and
            aspiring game designer.
          </h2>
          <Button
            className="landingButton"
            variant="outline-dark"
            size="lg"
            onClick={this.snapToHome}
          >
            Check out my work!
          </Button>
        </div>
        <div class="waveWrapper waveAnimation">
          <div class="waveWrapperInner bgMiddle">
            <div
              class="wave waveMiddle"
              style={{ backgroundImage: `url(${waveMid})` }}
            ></div>
          </div>
          <div class="waveWrapperInner bgBottom">
            <div
              class="wave waveBottom"
              style={{ backgroundImage: `url(${waveBot})` }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;