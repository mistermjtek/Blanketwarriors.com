'use strict';
import React from 'react';
import Router from 'react-router';
import Navigation from './Navigation';

const Layout = React.createClass({
  render: function() {
    return (
      <div>
        <Navigation />
        <Router.RouteHandler />
      </div>
    );
  }
});

export default Layout;
