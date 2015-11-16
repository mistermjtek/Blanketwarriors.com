/**
 * NavigationLink
 *
 * A link in the Navigation bar
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router';

export default class NavLink extends React.Component {
  render() {
		const linkedPath = this.props.to;
		const currentPath = this.props.path;
    const otherProps = _.omit(this.props, 'to', 'other');

		let className = this.props.className || '';
		if(linkedPath === currentPath){ className += ' selected'; }

    return ( <Link to={linkedPath} className={className} {...otherProps} /> );
  }
}
