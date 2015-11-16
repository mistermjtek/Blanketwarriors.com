/**
 * Layout
 *
 * Wraps the router views.  This is what is directly included in the body tag.
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import {Router} from 'react-router';
import Navigation from './NavigationBar';
import collections from './Collections';

export default class Layout extends React.Component {
	constructor(props) {
		super(props);
	}
  render() {
  	const navProps = _.omit(this.props, 'children');
  	const routeProps = _.assign(navProps, {collections: collections});
    return (
      <div>
        <Navigation {...navProps} />
        {React.cloneElement(this.props.children, routeProps)}
      </div>
    );
  }
}
