/**
 * Blog
 *
 * The list of blog posts.  Unrelated to BlogPost.js
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router';

export default class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Link className="list-item" key={this.props.name} to={this.props.to} params={this.props}>
        <h1 className="list-item-title">{this.props.title}</h1>
      </Link>
    );
  }
}
