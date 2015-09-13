// Server.js
// ---------

// Server.js serves as the starting point for React on server-side.
// It uses Express to serve static built files from /build/public, and static
// resource files from /assets.  For any other request, it uses React Router,
// and wraps that with our Html component.

'use strict';
import express from 'express';
import React from 'react';
import Router from 'react-router';
import Routes from './components/Routes';
import HtmlComponent from './components/Html';
import path from 'path';

const server = express();

// Logging out requests just for reference.
server.use(function(req, res, next) {
  console.log(req.path);
  next();
});

// Serve our static files
server.use('/', express.static(path.join(__dirname, '../build/public')));
server.use('/assets', express.static(path.join(__dirname, '../assets')));

// Middleware runs our router on all other requests.
server.use(function(request, response){

  // THIS IS A DEPRECATED USAGE OF REACT ROUTER.  WILL FIX.
  // `https://github.com/rackt/react-router/blob/master/UPGRADE_GUIDE.md`

  // Root: The component resulting from React Router
  // State: The state of the component
  Router.run(Routes, request.path, function(Root, state) {
    let bodyElement = React.createFactory(Root)({
      params: state.params
    });

    // Renders the wrapped component into an HTML string.
    let html = React.renderToStaticMarkup(
      <HtmlComponent markup={React.renderToString(bodyElement)} />
    );

    response.send(html);
  });
});

let port = process.env.PORT || 2000;
server.listen(port);
console.log('listening on port', port);
