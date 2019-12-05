import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../App.css";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="twoCards">
          <div className="card">
            <p>Some cool INFOOOOOOOOOOOOOOOOOOOOOOO</p>
            <p>#1</p>
            <p>OOOOOOOOOf</p>
          </div>
          <div className="card">
            <p>Some cool INFOOOOOOOOOOOOOOOOOOOOOOO</p>
            <p>#1</p>
            <p>OOOOOOOOOf</p>
          </div>
        </div>
        <div className="bigCard">
          <p>Some cool INFOOOOOOOOOOOOOOOOOOOOOOO</p>
          <p>#1</p>
          <p>OOOOOOOOOf</p>
        </div>
        <div className="allWorkDone">
          <h1 className="miniTitle">Work done for past clients:</h1>
          <div className="workDone">
            <div className="project">
              <h2>Alleyway Events</h2>
              <h3>A website made for a local pizzaria that hosts live music weekly and changes monthly.</h3>
              <a href="http://alleywayevents.com">Check out the live website</a>
            </div>
            <div className="project">
              <h2>KNINE Coffee</h2>
              <h3>
                An E-Commerce website for a coffee company, using Shopify and
                custom coding.
              </h3>
              <a href="https://www.kninecs.com/">Check out the live website</a>
            </div>
            <div className="project">
              <h2>JoyStick Forums</h2>
              <h3>
                A simple example forum website, with user authentication and
                comment threads.
              </h3>
              <a href="https://joystick-forums.firebaseapp.com/">
                Check out the live website
              </a>
            </div>
            <div className="project">
              <h2>JoyStick Forums</h2>
              <h3>
                A simple example forum website, with user authentication and
                comment threads.
              </h3>
              <a href="https://joystick-forums.firebaseapp.com/">
                Check out the live website
              </a>
            </div>
          </div>
        </div>
        <p style={{ marginTop: 500 }}>henlo</p>
      </div>
    );
  }
}

export default Home;