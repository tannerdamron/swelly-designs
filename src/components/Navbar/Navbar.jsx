import React from "react";
import "../../App.css";

class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // field: value
  //   };
  //   //creates a reference for your element to use
  //   this.myDivToFocus = React.createRef();
  // }

  // handleOnClick = event => {
  //   //.current is verification that your element has rendered
  //   if (this.myDivToFocus.current) {
  //     this.myDivToFocus.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "nearest"
  //     });
  //   }
  // };

  snapToProjects() {
    document.getElementById("allWorkDone").scrollIntoView({ behavior: "smooth" });
  }

  render() {
    return (
      <div id="Nav">
        <p className="navLink">Home</p>
        <p className="navLink" onClick={this.snapToProjects}>
          Projects
        </p>
        <h1 className="homeTitle">Swelly Designs</h1>
        <p className="navLink">Tech Stack</p>
        <p className="navLink">Contact</p>
      </div>
    );
  }
}

export default Navbar;
