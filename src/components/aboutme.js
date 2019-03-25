import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import griffith from '../images/griffith.jpg';


export default class AboutMe extends Component {
  render() {
    return (
      <div className="about-wrapper">
      <Grid>
        <Cell className="about-col" col={8}>
          <section className="about">
            <div style={{textAlign: 'center'}}>
              <div>
                <div col={4}>
                  <h2 className="text-white">About</h2>
                  <hr/>
                  <p className="text-white-50">A Southern California native who enjoys cycling and the great outdoors. Curious from the start. Determined to succeed, because there are always multiple solutions to a problem. Empathetic to the world around me. A lifetime learner. I choose the least path traveled. Open minded to new ideas and technologies. An automotive professional in the luxury brand market and now a self sufficent developer.</p>
                </div>
              </div>
            </div>
          </section>
          <img src={griffith} className="griffith" alt="griffith park"/>
        </Cell>
      </Grid>

      </div>
    )
  }
}