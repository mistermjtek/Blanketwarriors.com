/**
 * About
 *
 * TODO: Basic about page.  Needs an update.
 */

'use strict';
import React from 'react';
import Card from 'react-material-card';
import UserCard from './UserCard';

export default class About extends React.Component {

  render() {

    const styles = {
      row: {
        display: 'flex',
        flexFlow: 'row nowrap', /* Align on the same line */
        justifyContent: 'space-between'
      }
    };
    
    return (
      <div className="about wrapper">
      	<div className="content">
        	<h1>We are Blanket Warriors</h1>
        	<p>We do work, drink hot chocolate, and wear blankets when it's cold. We stream on Twitch.tv, love taking on new projects, and always have fun. Woot.</p>
          <h1>Contributors</h1>
          <div className='row' style={styles.row}>
            <UserCard index='1' />
            <UserCard index='2' />
            <UserCard index='3' />
          </div>
      	</div>
      </div>
    );
  }
}
