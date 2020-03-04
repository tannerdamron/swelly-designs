import React, { Component } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
