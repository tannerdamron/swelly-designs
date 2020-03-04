import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import cover from "./assets/cover.PNG"

class App extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Swelly Designs</title>
          <meta
            name="description"
            content="Swelly Designs, a portfolio and personal business website"
          />
          <meta name="og:image" content={cover} />
        </Helmet>
        <div className="App">
          <Landing />
          <Navbar />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
