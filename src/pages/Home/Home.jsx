/* eslint-disable jsx-a11y/anchor-has-content */
import React, { Component } from "react";
import "../../App.css";

import tanner from '../../assets/tanner.png';
import js from '../../assets/js.png'
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from '../../assets/react.png'
import csharp from '../../assets/csharp.png'
import angular from "../../assets/angular.png";
import dnn from "../../assets/dnn.png";
import dotnet from "../../assets/dotnet.png";
import git from "../../assets/git.png";
import jsx from "../../assets/jsx.png";
import reactnative from "../../assets/reactnative.png";
import sql from "../../assets/sql.png";
import vue from "../../assets/vue.png";
import unreal from "../../assets/unreal.png"
import unity from "../../assets/unity.png"

import ScrollAnimation from "react-animate-on-scroll";
import {
  Button,
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
          <ScrollAnimation animateIn="bounceInRight" animateOnce="true">
            <div className="bigCard">
              <div>
                <img
                  className="tanner"
                  src={tanner}
                  alt="owner of swelly designs face"
                />
              </div>
              <div>
                <h1 className="bioTitle">About Me</h1>
                <p className="aboutText">
                  I started my web and program development journey in August
                  2018. I have always been a computer and video game nerd
                  growing up and had thought that programming would take many
                  years at an expensive college. I found some free resources
                  online and developed a passion for programming and design in
                  my spare time. I then attended a Web & Mobile Development Boot
                  Camp called Epicodus in Seattle, WA. After 7 months of
                  ferrying over to Seattle Monday through Friday, and pair
                  programming 8 hours a day, I did a two month internship at
                  MainStem Inc. as a Full Stack Developer. After the internship
                  I have been furthering my knowledge and skillset by creating
                  custom websites for local business', exploring game design,
                  and learning new technologies.
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="bounceInLeft" animateOnce="true">
            <div className="techStack">
              <h1 className="miniTitle">Tech Stack</h1>
              <div className="techGrid">
                <div>
                  <h1 className="techTitle">1+ years</h1>
                  <div className="logoGrid">
                    <img className="techLogo" src={html} alt="HTML Logo" />
                    <p className="logoText">HTML</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={css} alt="CSS Logo" />
                    <p className="logoText">CSS</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={js} alt="JavaScript Logo" />
                    <p className="logoText">JavaScript</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={react} alt="React Logo" />
                    <p className="logoText">React</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={csharp} alt="CSharp Logo" />
                    <p className="logoText">C#</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={git} alt="GIT Logo" />
                    <p className="logoText">Git</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={jsx} alt="JSX Logo" />
                    <p className="logoText">JSX</p>
                  </div>
                </div>

                <div>
                  <h1 className="techTitle">&lt; 1 year</h1>
                  <div className="logoGrid">
                    <img className="techLogo" src={angular} alt="HTML Logo" />
                    <p className="logoText">Angular</p>
                  </div>
                  <div className="logoGrid">
                    <img
                      className="techLogo"
                      src={dotnet}
                      alt="JavaScript Logo"
                    />
                    <p className="logoText">.NET MVC</p>
                  </div>
                  <div className="logoGrid">
                    <img
                      className="techLogo"
                      src={reactnative}
                      alt="React Native Logo"
                    />
                    <p className="logoText">React Native</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={sql} alt="SQLServer Logo" />
                    <p className="logoText">SQLServer</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={vue} alt="Vue Logo" />
                    <p className="logoText">Vue</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={unity} alt="Unity Logo" />
                    <p className="logoText">Unity</p>
                  </div>
                  <div className="logoGrid">
                    <img
                      className="techLogo"
                      src={unreal}
                      alt="Unreal Engine Logo"
                    />
                    <p className="logoText">Unreal</p>
                  </div>
                  <div className="logoGrid">
                    <img className="techLogo" src={dnn} alt="DotNetNuke Logo" />
                    <p className="logoText">DNN</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <div id="projects">
          <div className="allWorkDone">
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h1 className="miniTitle">Recent Work:</h1>
            </ScrollAnimation>
            <div className="sectionGrid">
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
                <h1>Prime Glass Supply</h1>
                <a
                  className="project primeglass hvr-float-shadow"
                  href="https://primeglass.myshopify.com/"
                ></a>
                <p className="projectText">
                  An E-Commerce website for a local art broker that sends quote
                  requests directly to company owners email. (Currently under construction).
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="personalProjects">
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h1 className="miniTitle">Personal Projects:</h1>
            </ScrollAnimation>
            <div className="personalSectionGrid">
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
              <ScrollAnimation
                animateIn="fadeIn"
                duration="2"
                animateOnce="true"
              >
                <h1>Tan's Tap Jam</h1>
                <a
                  className="project tapRoom hvr-float-shadow"
                  href="https://tap-room-react-25dad.firebaseapp.com/#/"
                ></a>
                <p className="projectText">
                  A tap room website made with React, allowing tap room
                  employees to see a list of available kegs, sell pints or
                  growlers with amount left updated each time, add new kegs, and
                  filter kegs by style of beer or price.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div id="games">
          <div className="gamesSection">
            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
              <h1 className="miniTitle">Games</h1>
            </ScrollAnimation>
            <div className="sectionGridGames">
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
                  (Web browser only)
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeIn"
                duration="2"
                animateOnce="true"
              >
                <h1>Current Game In Progress</h1>
                <div className="project infiniteRunner"></div>
                <p className="projectText">
                  I am currently working on a pixel art 2d infinite runner using
                  Unity2D.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div id="contact">
          <ScrollAnimation animateIn="lightSpeedIn" animateOnce="true">
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