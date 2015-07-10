'use strict';
import React from 'react';
import Router from 'react-router';

const Layout = React.createClass({
  render: function() {
    return (
      <Router.RouteHandler />
    );
  }
});

export {Layout};
