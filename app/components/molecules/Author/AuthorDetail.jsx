'use strict';
import _ from 'lodash';
import React from 'react';

class AuthorDetail extends React.Component {
  render() {
    return (
      <h3>
        <img src={'/assets/Blog' + this.props.image}/>
        {this.props.name} | {this.props.date}
      </h3>
    );
  }
}

export default AuthorDetail;
