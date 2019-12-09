import React, { Component } from "react";
import "../../App.css";

import tanner from '../../assets/tanner.png';
import ScrollAnimation from "react-animate-on-scroll";
import {
  Button,
  FormFeedback,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import * as emailjs from "emailjs-com";

class Home extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: "tanner.mdamron@gmail.com",
      subject: subject,
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_GrFphG4K",
      templateParams,
      "user_6Eu68sdo1QL4k77JM0atu"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };

  render() {
    return (
      <div id="homePage">
        <ScrollAnimation animateIn="zoomInDown" animateOut="zoomOutDown">
          <div className="bigCard">
            <div>
              <img src={tanner} alt="owner of swelly designs face" />
            </div>
            <div>
              <h1>Hello</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                optio quasi placeat, veniam doloribus doloremque soluta
                inventore iste quis deleniti natus quisquam, labore nobis odio
                dicta beatae animi, harum officiis!
              </p>
              <p>OOOOOOOOOf</p>
            </div>
          </div>
        </ScrollAnimation>
        <div className="twoCards">
          <ScrollAnimation animateIn="bounceInLeft" animateOut="bounceOutLeft">
            <div className="card">
              <p>Some cool INFOOOOOOOOOOOOOOOOOOOOOOO</p>
              <p>#1</p>
              <p>OOOOOOOOOf</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="bounceInRight"
            animateOut="bounceOutRight"
          >
            <div className="card">
              <p>Some cool INFOOOOOOOOOOOOOOOOOOOOOOO</p>
              <p>#1</p>
              <p>OOOOOOOOOf</p>
            </div>
          </ScrollAnimation>
        </div>

        <div id="allWorkDone">
          <ScrollAnimation animateIn="rollIn" animateOut="rollOut">
            <h1 className="miniTitle">Work done for past clients:</h1>
          </ScrollAnimation>
          <div className="workDone">
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
              <div className="project">
                <h2>Alleyway Events</h2>
                <h3>
                  A website made for a local pizzaria that hosts live music
                  weekly and changes monthly.
                </h3>
                <a href="http://alleywayevents.com">
                  Check out the live website
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
              <div className="project">
                <h2>KNINE Coffee</h2>
                <h3>
                  An E-Commerce website for a coffee company, using Shopify and
                  custom coding.
                </h3>
                <a href="https://www.kninecs.com/">
                  Check out the live website
                </a>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
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
            </ScrollAnimation>
            <ScrollAnimation animateIn="bounceIn" animateOut="bounceOut">
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
            </ScrollAnimation>
          </div>
        </div>

        <div id="contact">
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, "email")}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, "name")}
                placeholder="Name"
              />
            </FormGroup>
            <FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, "subject")}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, "message")}
              />
            </FormGroup>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <p style={{ marginTop: 500 }}>henlo</p>
      </div>
    );
  }
}

export default Home;