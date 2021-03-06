/**
 * Layout
 *
 * Wraps the router views.  This is what is directly included in the body tag.
 */

'use strict';
import React from 'react';
import {Router} from 'react-router';
import Navigation from './NavigationBar';
import collections from './Collections';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        {React.cloneElement(this.props.children, {collections:collections})}
      </div>
    );
  }
}
