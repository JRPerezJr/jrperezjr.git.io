import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

export default class Experience extends Component {
  render() {
    return (
        <Grid>
        <Cell col={4}>
          <h6>{this.props.startYear} - {this.props.endYear}</h6>
          <h7>{this.props.location} </h7>
        </Cell>
        <Cell col={8}>
          <h4>{this.props.Company} </h4>
          <h5 style={{marginTop: '0px', color: '#7ea1df'}}>{this.props.Title}</h5>
          <strong>Responsibilities: </strong>
          <p>{this.props.Description}</p>
          <span>&nbsp;</span>
          <strong>Achievements: </strong>
          <p>{this.props.Details}</p>
        </Cell>
    </Grid>
    )
  }
}
