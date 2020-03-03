import React from "react";
import "../../App.css";
import Div100vh from "react-div-100vh";

import Button from "react-bootstrap/Button";

import waveMid from "../../assets/wave-mid.png";
import waveBot from "../../assets/wave-bot.png";

class Landing extends React.Component {
  componentDidMount() {
  }

  snapToAbout() {
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }

  render() {
    return (
      <Div100vh id="Landing">
        <div className="landingDiv">
          <h2 className="landingText">
            Welcome to Swelly Designs, My name is Tanner Damron.
            <br />I am a certified full stack web and mobile developer and
            aspiring game designer.
          </h2>
          <Button
            className="landingButton"
            size="lg"
            onClick={this.snapToAbout}
          >
            Check out my work!
          </Button>
        </div>
        <div className="waveWrapper waveAnimation">
          <div className="waveWrapperInner bgMiddle">
            <div
              className="wave waveMiddle"
              style={{ backgroundImage: `url(${waveMid})` }}
            ></div>
          </div>
          <div className="waveWrapperInner bgBottom">
            <div
              className="wave waveBottom"
              style={{ backgroundImage: `url(${waveBot})` }}
            ></div>
          </div>
        </div>
      </Div100vh>
    );
  }
}

export default Landing;