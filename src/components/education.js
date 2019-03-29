import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
export default class Education extends Component {
  render() {
    return (
      <Grid>
          <Cell col={4}>
            <p>{this.props.startYear} to {this.props.endYear}</p>
          </Cell>
          <Cell col={8}>
            <h4 style={{marginTop: '0px'}}>{this.props.schoolName}</h4>
            <h5 style={{color: '#7ea1df'}} >{this.props.degree}</h5>
            <p>{this.props.schoolDescription}</p>
          </Cell>
      </Grid>
    )
  }
}
