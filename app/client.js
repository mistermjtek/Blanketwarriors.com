'use strict';
import React from 'react';
import Router from 'react-router';
import Routes from './components/Routes';

Router.run(Routes, Router.HistoryLocation, function(Handler, state) {
  let bodyElement = React.createFactory(Handler)({});
  React.render(bodyElement, document.body);
});

