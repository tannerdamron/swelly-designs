/* eslint-disable jsx-a11y/anchor-has-content */
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

import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

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
      message_html: message,
      name: name
    };

    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure?',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>
            emailjs.send(
              "gmail",
              "template_GrFphG4K",
              templateParams,
              "user_6Eu68sdo1QL4k77JM0atu"
            )
        },
        {
          label: 'No',
          onClick: () => ""
        }
      ]
    });
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
        <div id="about">
          <ScrollAnimation animateIn="zoomInDown" animateOnce="true">
            <div className="bigCard">
              <div>
                <img src={tanner} alt="owner of swelly designs face" />
              </div>
              <div>
                <h1 className="bioTitle">
                  About Me
                </h1>
                <p>
                  I started my web and program development journey in August
                  2018. I have always been a computer and video game nerd
                  growing up and had thought that programming would take many
                  years at an expensive college. After stumbling across some
                  free resources online and developing a passion for programming
                  and design in my spare time, I found a Web & Mobile
                  Development Boot Camp called Epicodus in Seattle, WA. It
                  turned out to be an amazing and intense experience. After 7
                  months of ferrying over to Seattle Monday through Friday, 9
                  hours a day I received a two month internship at an E-Commerce
                  company called MainStem Inc as a Full Stack Developer. After
                  the internship I have now been furthering my knowledge and
                  skillset by creating custom websites for local business' and
                  exploring new technologies.
                </p>
              </div>
            </div>
          </ScrollAnimation>
          <div className="techStack">
            <h1>Tech Stack</h1>
          </div>
        </div>

        <div id="projects">
          <div className="allWorkDone">
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h1 className="miniTitle">Work done for past clients:</h1>
            </ScrollAnimation>
            <div className="workDone">
              <ScrollAnimation
                animateIn="fadeIn"
                duration="2"
                animateOnce="true"
              >
                <h1>Alleyway Events</h1>
                <a
                  className="project alleywayEvents hvr-float-shadow"
                  href="http://alleywayevents.com"
                ></a>
                <p className="projectText">
                  An event page made for a local pizzaria that hosts live music
                  weekly and changes monthly, with an embedded facebook section.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                duration="2"
                animateOnce="true"
              >
                <h1>Knine Coffee</h1>
                <a
                  className="project kninecs hvr-float-shadow"
                  href="https://www.kninecs.com/"
                ></a>
                <p className="projectText">
                  An E-Commerce website for a nutritional based coffee company,
                  using Shopify and custom coding.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                duration="2"
                animateOnce="true"
              >
                <h1>Spaceboi</h1>
                <a
                  className="project spaceboi hvr-float-shadow"
                  href="https://spaceboi.claramunro.com"
                ></a>
                <p className="projectText">
                  A JavaScript video game made with canvas and custom artwork.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                duration="2"
                animateOnce="true"
              >
                <h1>Joystick Forums</h1>
                <a
                  className="project joystickForums hvr-float-shadow"
                  href="https://joystick-forums.firebaseapp.com/"
                ></a>
                <p className="projectText">
                  A simple example forum website, with user authentication and
                  comment threads, using Angular framework & Firebase database.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div id="contact">
          <ScrollAnimation animateIn="flipInX" animateOnce="true">
            <div className="contactCard">
              <h1 className="p-heading1">Get in Touch</h1>
              <Form onSubmit={this.handleSubmit.bind(this)}>
                <FormGroup controlId="formBasicEmail">
                  <Label className="contactLabel">Email address</Label>
                  <Input
                    type="email"
                    name="email"
                    value={this.state.email}
                    className="contactInput"
                    onChange={this.handleChange.bind(this, "email")}
                    placeholder="Enter email"
                    required
                  />
                </FormGroup>
                <FormGroup controlId="formBasicName">
                  <Label className="contactLabel">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    value={this.state.name}
                    className="contactInput"
                    onChange={this.handleChange.bind(this, "name")}
                    placeholder="Name"
                    required
                  />
                </FormGroup>
                <FormGroup controlId="formBasicSubject">
                  <Label className="contactLabel">Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    className="contactInput"
                    value={this.state.subject}
                    onChange={this.handleChange.bind(this, "subject")}
                    placeholder="Subject"
                    required
                  />
                </FormGroup>
                <FormGroup controlId="formBasicMessage">
                  <Label className="contactLabel">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    className="contactInput"
                    value={this.state.message}
                    onChange={this.handleChange.bind(this, "message")}
                    required
                  />
                </FormGroup>
                <Button
                  className="submitButton"
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}

export default Home;