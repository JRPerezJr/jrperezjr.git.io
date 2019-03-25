import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

export default class Skills extends Component {
  render() {
    return (
        <Grid>
        <Cell col={12}>
          <h5 style={{color: '#7ea1df'}} >{this.props.programlang}</h5>
          <h6>{this.props.lang}</h6>
          <h5 style={{color: '#7ea1df'}} >{this.props.frameLib}</h5>
          <h6>{this.props.frame}</h6>
          <h5 style={{color: '#7ea1df'}} >{this.props.apiProto}</h5>
          <h6>{this.props.api}</h6>
          <h5 style={{color: '#7ea1df'}} >{this.props.softDev}</h5>
          <h6>{this.props.soft}</h6>
          <h5 style={{color: '#7ea1df'}} >{this.props.dataFormats}</h5>
          <h6>{this.props.data}</h6>
          <h5 style={{color: '#7ea1df'}} >{this.props.versionControl}</h5>
          <h6>{this.props.version}</h6>
        </Cell>
    </Grid>
    )
  }
}
