// Client.js
// ---------

// Client.js serves as the starting point for React on client-side.
// It runs the React Router and append the resulting component to the DOM.
// This gets included on the client side via a script tag in components/Html.js

'use strict';
import React from 'react';
import Router from 'react-router';
import Routes from './components/Routes';
import './stylesheets/style.scss';

// THIS IS A DEPRECATED USAGE OF REACT ROUTER.  WILL FIX.
// `https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md`
Router.run(Routes, Router.HistoryLocation, function(Root) {
  React.render(<Root />, document.body);
});

