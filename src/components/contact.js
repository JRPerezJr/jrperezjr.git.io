import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../images/avatar.png';;
export default class Contact extends Component {
  
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
        <Cell col={4}>
          <h2>Juan Perez Jr.</h2>
          <img
            src={avatar}
            alt="Avatar"
            // style={{height: '350px'}}
            className="contact-avatar"
            />
            <p
              style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}
              >Let's Connect</p>
        </Cell>
        <Cell col={6}>
          <h2>Contact</h2>
          <hr/>
          <div className="contact-list">
          <List>
            <ListItem>
              <ListItemContent className="list-item-content">
                <i className="fa fa-envelope" aria-hidden="true"/>
                <a href="mailto:contact@jperezdevinjp.tech" title="Open default email program to send a message" rel="noopener noreferrer" target="_blank" style={{textDecoration: 'none', color: 'white'}}>Contact</a>
              </ListItemContent>
            </ListItem>
            
          </List>
          </div>
        </Cell>
      </Grid>
      </div>
    )
  }
}
