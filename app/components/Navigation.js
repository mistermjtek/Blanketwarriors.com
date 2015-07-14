'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

const NavLink = React.createClass({
  render: function() {
    let other = _.omit(this.props, 'to', 'other');
    console.log(this.props);
    let names = [].concat(this.props.to); //typecast to array

    let className = this.props.className || '';
    return (
      <Router.Link to={names[0]} className={className} {...other} />
    );
  }
});

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <NavLink to="home">Home</NavLink>
        <NavLink to={["blog", "post"]}>Blog</NavLink>
        <NavLink to={["projects", "project"]}>Projects</NavLink>
      </nav>
    );
  }
});

export default Nav;
