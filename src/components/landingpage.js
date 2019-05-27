import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import fullStackDeveloperJuanPerezJr from "../images/full-stack-developer-juan-perez-jr.jpg";
import { Link } from "react-router-dom";
import { Event } from "./Track";

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={fullStackDeveloperJuanPerezJr}
              alt="full-stack-developer-juan-perez-jr"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr />
              <p>
                HTML5/CSS3 | <span className="b">Bootstrap</span> | Java/Spring
                | JavaScript | Angular 6 | <span className="m">M</span>
                <span className="e">E</span>
                <span className="a">A</span>
                <span className="n">N</span>
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  onClick={() =>
                    Event(
                      "LINK",
                      "Portfolio landing LinkedIn clicked",
                      "LANDING_PAGE_SECTION"
                    )
                  }
                  href="https://www.linkedin.com/in/devjuanperezjr"
                  title="Go to my LinkedIn page"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  onClick={() =>
                    Event(
                      "LINK",
                      "Portfolio landing GitHub clicked",
                      "LANDING_PAGE_SECTION"
                    )
                  }
                  href="https://github.com/JRPerezJr"
                  title="Go to my Git Hub page"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Email */}
                <Link to="/contact">
                  <i
                    className="fa fa-envelope-square"
                    title="Go to my portfolio contact page"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
