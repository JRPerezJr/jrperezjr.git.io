import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import me from '../images/me.jpg';
import { Link } from 'react-router-dom';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
            <Cell col={12}>
            <img
                src={me}
                alt="avatar"
                className="avatar-img"
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr/>
              <p>HTML5/CSS3 | <span className="b">Bootstrap</span> | Java/Spring | JavaScript | Angular 6 | <span className="m">M</span><span className="e">E</span><span className="a">A</span><span className="n">N</span></p>
              <div className="social-links">
                {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/devjuanperezjr" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                  </a>
                {/* Github */}
                  <a href="https://github.com/JRPerezJr" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"/>
                  </a>
                {/* Email */}
                <Link to="/contact">
                    <i className="fa fa-envelope-square" aria-hidden="true"/>
                </Link>
              </div>
            </div>
            </Cell>
        </Grid>
      </div>
    )
  }
}
