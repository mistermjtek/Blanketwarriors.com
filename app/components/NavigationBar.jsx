/**
 * Navigation
 *
 * The navigation bar.  Not much to say about it.
 */

'use strict';
import React from 'react';
import {Link} from 'react-router';
import NavLink from './NavigationLink';

export default class NavBar extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const currentPath = this.props.location.pathname;
    return (
      <nav className="nav wrapper">
        <NavLink to="/" path={currentPath}>Home</NavLink>
        <NavLink to="/about" path={currentPath}>About</NavLink>
        <NavLink to="/projects" path={currentPath}>Projects</NavLink>
        <NavLink to="/blog" path={currentPath}>Blog</NavLink>
      </nav>
    );
  }
}
