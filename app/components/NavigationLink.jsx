/**
 * NavigationLink
 *
 * A link in the Navigation bar
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

export default class NavLink extends React.Component {
  render() {
    // All props but 'to' and 'other'.
    let other = _.omit(this.props, 'to', 'other');
    let className = this.props.className || '';
    if( this.props.path === this.props.to ) { className = className + ' selected'; }

    return ( <Link to={ this.props.to } className={ className } {...other} /> );
  }
}
