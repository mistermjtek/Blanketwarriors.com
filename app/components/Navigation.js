'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

class NavLink extends React.Component {
  render() {
    let other = _.omit(this.props, 'to', 'other');
    let names = [].concat(this.props.to); //typecast to array

    let path = this.props.path.replace(/\//g, '') || 'home';
    let to = Array.isArray(this.props.to) ? this.props.to[0] : this.props.to;

    let className = this.props.className || '';
    if( path === to ) { className = className + ' selected'; }

    return (
      <Router.Link to={ names[0] } className={ className } {...other} />
    );
  }
}

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
