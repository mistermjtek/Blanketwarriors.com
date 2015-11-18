'use strict';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

class NavLink extends React.Component {
  render() {
		const linkedPath = this.props.to;
    const otherProps = _.omit(this.props, 'to', 'other');
    return ( <Link to={linkedPath} {...otherProps} /> );
  }
}

NavLink.propTypes = {
  to: React.PropTypes.string.isRequired
};

NavLink.defaultProps = {
  className: ''
};

export default NavLink;
