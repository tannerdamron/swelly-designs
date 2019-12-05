import React, { Component } from "react";
import "../../App.css";

import tanner from '../../assets/tanner.png';

class Home extends Component {
  render() {
    return (
      <div id="homePage">
        <div className="bigCard">
          <div>
            <img src={tanner} alt="owner of swelly designs face" />
          </div>
          <div>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error optio quasi placeat, veniam doloribus doloremque soluta inventore iste quis deleniti natus quisquam, labore nobis odio dicta beatae animi, harum officiis!</p>
            <p>OOOOOOOOOf</p>
          </div>
        </div>
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

        <div className="allWorkDone">
          <h1 className="miniTitle">Work done for past clients:</h1>
          <div className="workDone">
            <div className="project">
              <h2>Alleyway Events</h2>
              <h3>
                A website made for a local pizzaria that hosts live music weekly
                and changes monthly.
              </h3>
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