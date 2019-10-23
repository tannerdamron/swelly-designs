import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../../App.css";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div>
        </div>
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
        <div className="card">
          <p>Some cool INFOOOOOOOOOOOOOOOOOOOOOOO</p>
          <p>#1</p>
          <p>OOOOOOOOOf</p>
        </div>
        <p style={{ marginTop: 500 }}>henlo</p>
      </div>
    );
  }
}

export default Home;