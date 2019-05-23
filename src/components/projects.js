import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu
} from "react-mdl";
// import mean from '../images/mean.png';
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  onClick() {
    alert("Webpage is currently under maintenance. Please check back later.");
  }
  onClickJava() {
    alert("This repo has not been pushed to Github. Please check back later.");
  }
  onClickGit() {
    alert("This repo has not been pushed to Github. Please check back later.");
  }
  onClickFlutter() {
    alert("This project has been postponed. Please check back later.");
  }
  onClickMeanRestaurant() {
    alert("This project is still under development. Please check back later.");
  }
  toggleCategories() {
    //<--------------MEAN Projects page------------------->
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* <--Disaster Project start--> */}
          <Card
            shadow={5}
            // className="disaster-card"
            style={{ margin: "auto" }}
          >
            <CardTitle className="title-image-mean">Disaster</CardTitle>
            <CardText>
              <div className="card-text">
                <strong>
                  A group project for NASA Space Apps Challenge 2018:{" "}
                </strong>
                <p>
                  The project was a disaster preparedness application designed
                  to help navigate through natural disasters such as food,
                  tornadoes, wildfires, earthquakes, and nuclear radiation for
                  before, during and after the event. It allows for users to be
                  informed of each disaster type and a checklist of the things
                  they need to pack into the bag for safety. Completion time 24
                  hours.
                </p>
                <ul>
                  <li>
                    Managed the project development and assisted with Git issues
                  </li>
                  <li>
                    Added and routed each disaster component in the project
                  </li>
                  <li>Embedded YouTube to each disaster page</li>
                  <li>
                    Tested the backend functionality and reported back results
                  </li>
                  <li>Created the project license text file</li>
                  <li>
                    Managed branching and merging of the project in Git Hub
                  </li>
                  <li>
                    Held Teamviewer meetings with team to discuss project and
                    development
                  </li>
                  <li>
                    Created diasater components and fire gif for visualization.
                  </li>
                  <li>
                    Deployed project to AWS EC2 and submitted to NASA Space Apps
                    Challenge 2018.
                  </li>
                </ul>
                <strong>Technologies Utilized: </strong>
                <p>
                  AWS E2C, MEAN (Mongo DB, Express, Angular 6, Node JS) stack,
                  and Bootstrap library
                </p>
              </div>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/sg27950/disaster/tree/ForPortfolioUse"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "rgb(63,81,181)"
                }}
              >
                <Button colored>GitHub</Button>
              </a>
              {/* <Button colored>CodePen</Button> */}

              {/* <--Live Demo button start--> */}
              {/* <a
                href="http://disaster.projects.jperezdevinjp.tech"
                rel="noopener noreferrer"
                target="_blank"
                style={{ textDecoration: "none", color: "rgb(63,81,181)" }}
              >
                <Button colored>LiveDemo</Button>
              </a> */}
              <Button onClick={this.onClick} colored>
                LiveDemo
              </Button>
              {/* <--Live Demo button end--> */}
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          {/* <--Disaster Project end--> */}

          {/* <--Restaurant Reviewer start--> */}
          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle className="title-image-mean">
              Restaurant Reviewer
            </CardTitle>
            <CardText>
              <div className="card-text">
                <strong>Under Construction: </strong>
                <p>Under Construction</p>
                <strong>Technologies Utilized: </strong>
                <p>
                  MEAN (Mongo DB, Express, Angular 6, Node JS) stack, and
                  Materialize library
                </p>
              </div>
            </CardText>
            <CardActions border>
              <Button onClick={this.onClickMeanRestaurant} colored>
                GitHub
              </Button>
              {/* <Button colored>CodePen</Button> */}
              <Button onClick={this.onClickMeanRestaurant} colored>
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          {/* <--Restaurant Reviewer End--> */}
        </div>
      );
      //<-----------------React projects page--------------------->
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* <--React Portfolio Project Start--> */}
          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle
              className="title-image-react"
              // style={{
              //   color: "#fff",
              //   height: "31rem",
              //   background:
              //     "url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover"
              // }}
            >
              This Portfolio
            </CardTitle>
            <CardText>
              <div className="card-text">
                <strong>My Portfolio website: </strong>
                <p>
                  First iteration of a single page web application built with
                  React and deployed with Amazon S3.
                </p>
                <strong>Technologies & Libraries Utilized: </strong>
                <p>
                  React, React-MDL, React Router Dom, Amazon S3, AWS CLI, VIM,
                  Chrome Developer Tools, Firefox Web Developer Tools, Google
                  Fonts and Font Awesome
                </p>
              </div>
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/JRPerezJr/jrperezjr.git.io"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "rgb(63,81,181)"
                }}
              >
                <Button colored>GitHub</Button>
              </a>
              {/* <Button colored>CodePen</Button> */}
              <a
                href="http://portfolio.jperezdevinjp.tech/"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "rgb(63,81,181)"
                }}
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          {/* <--React Portfolio Project Start--> */}

          {/* <--React Automotive Project Start--> */}
          <Card shadow={5} style={{ margin: "auto" }}>
            <CardTitle className="title-image-react-auto">
              Garabito's Garage
            </CardTitle>
            <CardText>
              <div className="card-text">
                <strong>Automotive Business Project: </strong>
                <p>
                  Simple single page layout for small businesses to manage
                  content and messages. Content management with Contentful, an
                  API-first content management infrastructure. Forms using the
                  Formik library. Validations through the Yup library.
                </p>
                <strong>Technologies & Libraries Utilized: </strong>
                <p>
                  React, React Router Dom, Contentful, Formik, Yup, Amazon S3,
                  AWS CLI, VIM, Chrome Developer Tools, Firefox Web Developer
                  Tools, Materialize, Google Fonts and Font Awesome
                </p>
              </div>
            </CardText>
            <CardActions border>
              {/* <a
                href="https://github.com/JRPerezJr/jrperezjr.git.io"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "rgb(63,81,181)"
                }}
              >
                <Button colored>GitHub</Button>
              </a> */}
              <Button onClick={this.onClickGit} colored>
                GitHub
              </Button>
              {/* <Button colored>CodePen</Button> */}
              <a
                href="http://automotive.project.jperezdevinjp.tech/"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "rgb(63,81,181)"
                }}
              >
                <Button colored>Live Demo</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
          {/* <--React Automotive Project End--> */}
        </div>
      );
      //<----------------------Java projects page------------------------->
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "512", margin: "auto" }}>
            <CardTitle className="title-image-java">The Smiths Space</CardTitle>
            <CardText>
              <div className="card-text">
                <strong>A tribute to The Smiths: </strong>
                <p>
                  A space for Smiths and Morrissey Fans to read about the band,
                  upload photos, and find local events in Los Angeles. Built
                  using the Materialize with the Spring Tool Suite. This project
                  is under continuous development. Please check back for
                  updates.
                </p>

                <strong>Technologies & Libraries Utilized: </strong>
                <p>
                  Java, Spring Boot, MySQL, Apache, AWS EC2, VIM and Materialize
                </p>
              </div>
            </CardText>
            <CardActions border>
              <Button onClick={this.onClickJava} colored>
                GitHub
              </Button>
              {/* <Button colored>CodePen</Button> */}
              {/* <a
                href="http://smiths.project.jperezdevinjp.tech/"
                rel="noopener noreferrer"
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "rgb(63,81,181)"
                }}
              >
                <Button colored>Live Demo</Button>
              </a> */}
              <Button onClick={this.onClick} colored>
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
        </div>
      );
      //<------------------------Flutter projects page------------------>
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "500", margin: "auto" }}>
            <CardTitle className="title-image-flutter">
              Vehicle Campaign Finder
            </CardTitle>
            <CardText>
              <div className="card-text">
                <strong>Under Development: </strong>
                <p>Under Development</p>

                <strong>Technologies & Libraries Utilized: </strong>
                <p>Flutter, Dart, Android Studio, Xcode/iOS</p>
              </div>
            </CardText>
            <CardActions border>
              <Button onClick={this.onClickFlutter} colored>
                GitHub
              </Button>
              {/* <Button colored>CodePen</Button> */}
              <Button onClick={this.onClickFlutter} colored>
                LiveDemo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              {/* <IconButton name="share" /> */}
            </CardMenu>
          </Card>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          className="category-tabs"
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab style={{ color: "#7ea1df" }}>MEAN</Tab>
          <Tab style={{ color: "#7ea1df" }}>React</Tab>
          <Tab style={{ color: "#7ea1df" }}>Java</Tab>
          <Tab style={{ color: "#7ea1df" }}>Flutter</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
