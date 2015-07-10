'use strict';
import React from 'react';
import Router from 'react-router';
import Routes from './components/Routes';

const Client = React.createClass({
  render: function() {
    return (
      <h1>HOME!!!</h1>
    );
  }
});

Router.run(Routes, Router.HistoryLocation, function(Handler, state) {
  var bodyElement = React.createFactory(Handler)({});

  React.render(bodyElement, document.body);
  console.log("Client Rendered");
});

