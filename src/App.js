import React, { Component } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Drawer,
  Content,
  Footer,
  FooterSection
} from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import { PageView, initGA } from "./components/Track";
import { Event } from "./components/Track";

class App extends Component {
  componentDidMount() {
    initGA("UA-140856444-1");
    PageView("/", "/resume", "/aboutme", "/projects", "/contact");
  }
  render() {
    return (
      <div className="demo-big-content">
        <Layout className="background-page">
          <Header
            className="header-color"
            title={
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                Portfolio
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio header_bar link to resume clicked",
                    "HEADER_BAR"
                  )
                }
                to="/resume"
              >
                Resume
              </Link>
              <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio header_bar link to aboutme clicked",
                    "HEADER_BAR"
                  )
                }
                to="/aboutme"
              >
                About Me
              </Link>
              <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio header_bar link to projects clicked",
                    "HEADER_BAR"
                  )
                }
                to="/projects"
              >
                Projects
              </Link>
              {/* <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio header_bar link to contact clicked",
                    "HEADER_BAR"
                  )
                }
                to="/contact"
              >
                Contact
              </Link> */}
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Portfolio
              </Link>
            }
          >
            <Navigation>
              <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio mobile_side_bar link to resume clicked",
                    "MOBILE_SIDE_BAR"
                  )
                }
                to="/resume"
              >
                Resume
              </Link>
              <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio mobile_side_bar link to aboutme clicked",
                    "MOBILE_SIDE_BAR"
                  )
                }
                to="/aboutme"
              >
                About Me
              </Link>
              <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio mobile_side_bar link to projects clicked",
                    "MOBILE_SIDE_BAR"
                  )
                }
                to="/projects"
              >
                Projects
              </Link>
              {/* <Link
                onClick={() =>
                  Event(
                    "LINK",
                    "Portfolio mobile_side_bar link to contact clicked",
                    "MOBILE_SIDE_BAR"
                  )
                }
                to="/contact"
              >
                Contact
              </Link> */}
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
          <Footer className="footer-color">
            <FooterSection
              style={{ height: ".5rem" }}
              type="middle"
              logo="&copy; 2019 jperezdevinjp.tech ver. 1.0"
            />
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
