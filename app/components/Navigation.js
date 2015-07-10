'use strict';
import React from 'react';
import Router from 'react-router';

const NavLink = React.createClass({
  mixins: [Router.State],

  render: function() {
    // Not using harmony with node
    // var {to, className, ...other} = this.props;
    var other = _.omit(this.props, "to", "other");

    // ensure array
    var names = [].concat(this.props.to);
    var isActive = _.any(names, function(name) {
      this.isActive(name);
    }.bind(this));

    var className = (isActive ? "active " : "") + (this.props.className || "");

    return (
      <Router.Link to={names[0]} className={className} {...other} />
    );
  }
});

const Nav = React.createClass({
  render: function() {
    return (
      <nav>
        <div className="nav-group">
          <NavLink to="home">Home</NavLink>
          <NavLink to="blog">Blog</NavLink>
          //<NavLink to={["what", "product"]}>What</NavLink>
          //<a className="menu-link" onClick={this.props.openMenu.bind(null, true)}>Menu</a>
        </div>

        //<NavLink to="home" className="logo"><img src="/img/logo.svg"/></NavLink>

        //<div className="nav-group right">
          //<NavLink to="careers">Join</NavLink>
          //<a href="http://blog.percolatestudio.com">Blog</a>
          //<a className="contact-link" onClick={this.props.openContact.bind(null, true)}>Contact</a>
        //</div>
      </nav>
    );
  }
});
