'use strict';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';
import NavLink from 'atoms/NavLink';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav wrapper">
        {_.map(this.props.locations, function mapNavBarLinks(location) {
          return <NavLink path={location.path}>location.name</NavLink>
        })}
      </nav>
    );
  }
}

NavBar.propTypes = {
  locations: React.propTypes.array.required
}

NavBar.defaultProps = {
  locations: [
    {name: 'Home', path: '/'},
    {name: 'About', path: '/about'},
    {name: 'Projects', path: '/projects'},
    {name: 'Blog', path: '/blog'}
  ]
}

export default NavBar;
