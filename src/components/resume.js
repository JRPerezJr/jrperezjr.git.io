import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import fullStackDeveloperJuanPerezJr1 from "../images/full-stack-developer-juan-perez-jr-1.jpg";
import tokyo from "../images/tokyo.jpg";
import { Event } from "./Track";
export default class Resume extends Component {
  render() {
    return (
      <div className="resumeWrapper">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={fullStackDeveloperJuanPerezJr1}
                alt="full-stack-developer-juan-perez-jr"
                className="me"
                // style={{height: '300px', padding: '20px'}}
              />
              <h2 style={{ paddingTop: "2em" }}>Juan Perez Jr.</h2>
              <br />
              <h3 style={{ color: "#81a5e3" }}>Full Stack Developer</h3>
              <hr style={{ borderTop: "5px solid #7ea1df", width: "100%" }} />
              <p style={{ fontSize: "15px" }}>
                Genuinely curious, and creative full-stack web developer with a
                passion for continuous improvement. I have extensive customer
                service and automotive technical experience as a technical
                support agent and automotive technician with a premium brand. As
                a lifelong learner, I am currently an expat seeking the
                opportunity where I can use creativity alongside my technical
                abilities to solve unique and interesting problems remotely or
                abroad.
              </p>
              <br />
              <h5 style={{ color: "#81a5e3" }}>Location</h5>
              <hr style={{ borderTop: "5px solid #7ea1df", width: "100%" }} />
              <h4>
                <a
                  onClick={() =>
                    Event(
                      "LINK",
                      "Portfolio resume_page Lonely Planet clicked",
                      "RESUME_PAGE"
                    )
                  }
                  href="https://www.lonelyplanet.com/japan/tokyo"
                  title="Go to the Japan section of Lonely Planet"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Tokyo, Japan
                </a>
              </h4>
              <img
                src={tokyo}
                alt="tokyo city skyline at night"
                className="tokyoMetro"
                // style={{height: '26rem', padding: '10px'}}
              />
              <br />
              <h5 style={{ color: "#81a5e3" }}>Email</h5>
              <hr style={{ borderTop: "5px solid #7ea1df", width: "100%" }} />
              <h4>
                <a
                  onClick={() =>
                    Event(
                      "LINK",
                      "Portfolio resume_page mail to clicked",
                      "RESUME_PAGE"
                    )
                  }
                  href="mailto:contact@jperezdevinjp.tech"
                  title="Open default email program to send a message"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact
                </a>
              </h4>
              <br />
              <h5 style={{ color: "#81a5e3" }}>Web</h5>
              <hr style={{ borderTop: "5px solid #7ea1df", width: "100%" }} />
              <h4>
                <a
                  onClick={() =>
                    Event(
                      "LINK",
                      "Portfolio resume_page Go_To_Porfolio clicked",
                      "RESUME_PAGE"
                    )
                  }
                  href="http://portfolio.jperezdevinjp.tech/"
                  title="Go to my portfolio main page"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  portfolio.jperezdevinjp.tech
                </a>
              </h4>
              <br />
              <h5 style={{ color: "#81a5e3" }}>Resume</h5>
              <hr style={{ borderTop: "5px solid #7ea1df", width: "100%" }} />
              <h4>
                <a
                  onClick={() =>
                    Event(
                      "LINK",
                      "Portfolio resume_page Download Resume clicked",
                      "RESUME_PAGE"
                    )
                  }
                  href="https://drive.google.com/file/d/11gLYte_s3lUMgwIe5eng-eu5Ya9CbJbI/view?usp=sharing"
                  title="Go to my Google Docs resume pdf file"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  View
                </a>
              </h4>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3 style={{ color: "#7ea1df" }}>Experience</h3>
            <hr style={{ borderTop: "5px solid #7ea1df" }} />
            <Experience
              startYear={2019}
              // endYear={2019}
              location="Setagaya-ku Tokyo-to Japan"
              Title="Freelance Web Developer"
              Company="Freelance"
              Description="
              Development of applications in React, Angular 6 and Java Spring"
              Details="
              Designed and developed frontend for small automotive business."
            />
            <Experience
              startYear={2018}
              endYear={2018}
              location="Burbank California United States"
              Title="Resident Developer"
              Company="Coding Dojo"
              Description="
              Development of single page applications in React and Angular 6"
              Details="
              Participated in a team for the NASA Space Apps Challenge 2018.
              Supported students with debugging errors and questions."
            />
            <Experience
              startYear={2015}
              endYear={2018}
              location="Fountain Valley California United States"
              Title="Technical Support Specialist"
              Company="Hyundai Motor America under contract through Concentrix"
              Description="
              Provide technical phone service to dealers and field technicians.
              Use initial diagnosis provided by the technician to provide the best diagnostic approach ultimately leading to customer satisfaction and brand retention.
              Assist technicians in fixing it right the first time in order to reduce the likelihood of lemon law arbitration.
              Working in conjunction with the dealership and consumer affairs to provide technical information and resolution. "
              Details="
              Developed remote diagnosis support for inbound calls.
              Guided new employees with CRM and Technical operations.
              Successfully repaired vehicles avoiding thousands of dollars in legal costs due to buyback."
            />
            <Experience
              startYear={2011}
              endYear={2015}
              location="Santa Ana California United States"
              Title="Automotive Technician"
              Company="Crevier BMW"
              Description="
                Perform diagnosis and repair of all BMW models."
              Details="
                Achieved BMW level 1 certification.
                Promoted to diagnostic team in less than 3 years.
                Maintained quality control of repairs in the workshop.
                Successfully documented and reported common mistakes in the workshop."
            />
            <h3 style={{ color: "#7ea1df" }}>Education</h3>
            <hr style={{ borderTop: "5px solid #7ea1df" }} />
            <Education
              startYear={2018}
              endYear={2018}
              schoolName="Coding Dojo"
              degree="Certificate of Achievement in Web Fundamentals, MEAN, & Java/Spring"
              schoolDescription="Immersive Full-Stack Development and Computer Science Program with over 1300 hours of intensive programming experience."
            />
            <Education
              schoolName="Universal Technical Institute"
              degree="Associate of Occupational Studies Automotive and Diesel Technology"
              schoolDescription="With more than 200,000 graduates in its 53-year history, Universal Technical Institute, Inc. (NYSE: UTI) is the nation’s leading provider of technical training for automotive, diesel, collision repair, motorcycle and marine technicians, and offers welding technology and computer numerical control (CNC) machining programs."
            />

            <h3 style={{ color: "#7ea1df" }}>Technical Skills</h3>
            <hr style={{ borderTop: "5px solid #7ea1df" }} />
            <Skills
              programlang="PROGRAMMING LANGUAGES"
              lang="Javascript, Python, Java, HTML5, CSS3, Typescript "
            />
            <Skills
              frameLib="FRAMEWORKS/LIBRARIES"
              frame="Django, Flask, Node.js, Express.js, Angular 6, Bootstrap, JQuery, Materialize, Mongoose "
            />
            <Skills apiProto="API/PROTOCOLS" api="AJAX, RESTful" />
            <Skills
              softDev="SOFTWARE/DEVTOOLS"
              soft="MySQL, SQLite, Mongo DB, Git, VSCode, Spring Tool Suite, Terminal/Command Prompt, Postman, MySQL Workbench "
            />
            <Skills
              dataFormats="DATA FORMATS"
              data="JSON(JavaScript Object Notation)"
            />
            <Skills versionControl="VERSION CONTROL" version="Github, GitLab" />
          </Cell>
        </Grid>
      </div>
    );
  }
}
