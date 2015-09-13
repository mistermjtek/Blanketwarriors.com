// Navigation.js
// ---------

// The navigation bar.  Not much to say about it.

'use strict';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

// A single Navigation link.
class NavLink extends React.Component {
  render() {
    // All props but 'to' and 'other'.
    let other = _.omit(this.props, 'to', 'other');
    let className = this.props.className || '';
    if( this.props.path === this.props.to ) { className = className + ' selected'; }

    return ( <Link to={ this.props.to } className={ className } {...other} /> );
  }
}

// The whole Navigation bar.  Is included via Layout.js
class Nav extends React.Component {
  render() {
    let currentPath = this._reactInternalInstance._context.location.pathname;
    return (
      <nav id="menu">
        <NavLink to="/" path={currentPath}>Home</NavLink>
        <NavLink to="/about" path={currentPath}>About</NavLink>
        <NavLink to={"/projects"} path={currentPath}>Projects</NavLink>
        <NavLink to={"/blog"} path={currentPath}>Blog</NavLink>
      </nav>
    );
  }
}

export default Nav;
