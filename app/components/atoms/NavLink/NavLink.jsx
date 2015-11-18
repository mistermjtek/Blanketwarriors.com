'use strict';
import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router';

class NavLink extends React.Component {
  render() {
		const linkedPath = this.props.to;
		const currentPath = this.props.path;
    const otherProps = _.omit(this.props, 'to', 'other');

		if(linkedPath === currentPath){
			otherProps.className += ' selected';
		}

    return ( <Link to={linkedPath} {...otherProps} /> );
  }
}

NavLink.propTypes = {
  to: React.PropTypes.string.isRequired,
  path: React.PropTypes.string.isRequired,
  className: React.PropTypes.string
};

NavLink.defaultProps = {
  className: ''
};

export default NavLink;
