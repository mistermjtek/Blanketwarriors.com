/**
 * Server.js
 *
 * Server.js serves as the starting point for React on server-side.
 * It uses Express to serve static built files from /build/public, and static
 * resource files from /assets.  For any other request, it uses React Router,
 * and wraps that with our Html component.
 */

'use strict';
import express from 'express';
import React from 'react';
import { Router, RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import HtmlComponent from './components/Html';
import Routes from './components/Routes';
import path from 'path';

const server = express();

// Logs out requests just for reference.
server.use(function(req, res, next) {
  console.log(req.path);
  next();
});

// Serves our static files
server.use('/', express.static(path.join(__dirname, '../build/public')));
server.use('/assets', express.static(path.join(__dirname, '../assets')));

// Middleware that runs our router on all other requests.
server.use(function(request, response){

  let location = createLocation(request.url);
  let routes = <Router>{Routes}</Router>;

  // Matches the React-Router route to the path
  match( {routes, location}, (error, redirectLocation, renderProps) => {

    // Renders the wrapped component into an HTML string.
    response.send(React.renderToStaticMarkup(
      <HtmlComponent markup={React.renderToString(<RoutingContext {...renderProps} />)} />
    ));
  })
});

let port = process.env.PORT || 2000;
server.listen(port);
console.log('listening on port', port);
