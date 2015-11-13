/**
 * Navigation
 *
 * The navigation bar.  Not much to say about it.
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import NavLink from './NavigationLink';

// The whole Navigation bar.  Is included via Layout.js
export default class NavBar extends React.Component {
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
