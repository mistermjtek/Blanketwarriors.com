'use strict';
import React from 'react';
import Router from 'react-router';
import Navigation from './Navigation';
import collections from './Collections';

const Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Navigation />
        <Router.RouteHandler collections={collections}/>
      </div>
    );
  }
});

export default Layout;
