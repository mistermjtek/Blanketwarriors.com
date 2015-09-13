// Navigation.js
// ---------

// The navigation bar.  Not much to say about it.

'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

// A single Navigation link.
class NavLink extends React.Component {
  render() {
    // All props but 'to' and 'other'.
    let other = _.omit(this.props, 'to', 'other');

    // Typecast our names to an array, since our project/projects and post/blog
    // pages move to the same route.
    let names = [].concat(this.props.to);

    // Our root path will be displayed as 'home'.
    let path = this.props.path.replace(/\//g, '') || 'home';
    let to = Array.isArray(this.props.to) ? this.props.to[0] : this.props.to;

    // Sets our className for navigation animations
    let className = this.props.className || '';
    if( path === to ) { className = className + ' selected'; }

    return (
      <Router.Link to={ names[0] } className={ className } {...other} />
    );
  }
}

// The whole Navigation bar.  Is included via Layout.js
class Nav extends React.Component {
  render() {
    let currentPath = this._reactInternalInstance._context.router.getCurrentPathname();
    return (
      <nav id="menu">
        <NavLink to="home" path={currentPath}>Home</NavLink>
        <NavLink to="about" path={currentPath}>About</NavLink>
        <NavLink to={["projects", "project"]} path={currentPath}>Projects</NavLink>
        <NavLink to={["blog", "post"]} path={currentPath}>Blog</NavLink>
      </nav>
    );
  }
}

export default Nav;
