'use strict';
import React from 'react';
import Card from 'react-material-card';
import collections from './Collections';

export default class UserCard extends React.Component {

  render() {
    const styles = {
      text: {
        color: 'black',
        textAlign: 'center'
      },
      image: {
        borderRadius: '50%'
      },
      row: {
        display: 'flex',
        flexFlow: 'row nowrap', /* Align on the same line */
        justifyContent: 'space-between'
      },
      card: {
        padding: '20px'
      }
  };

    // Returns the content in a user
    var getUser = function(userData) {
      return (
        <div style={styles.text} key={userData.name}>
          <img width='150' style={styles.image} src={userData.picture}/>
          <h3>{userData.name}</h3>
        </div>
      );
    };
    
    return (
    	 <Card style={styles.card} onOver={card => card.setLevel(3)} onOut={card => card.setLevel(1)}>
          {collections.userData[this.props.index].map(function(userData) {
            return getUser(userData);
          })}
        </Card>
    );
  }
}