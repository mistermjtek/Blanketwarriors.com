'use strict';
import React from 'react';
import Router from 'react-router';
import Navigation from './Navigation';
import collections from './Collections';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router.RouteHandler collections={collections}/>
      </div>
    );
  }
}

export default Layout;
