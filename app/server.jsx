/**
 * Server.js
 *
 * Server.js serves as the starting point for React on server-side.
 * It uses Express to serve static built files from /build/public, and static
 * resource files from /assets.  For any other request, it uses React Router,
 * and wraps that with our Html component.
 */

'use strict';
import path from 'path';
import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import createLocation from 'history/lib/createLocation';
import { Router, RoutingContext, match } from 'react-router';

import updateBlog from './updateBlog';
import Routes from './components/Routes';
import HtmlComponent from './components/Html';

const server = express();

// Logs out requests just for reference.
server.use(function(req, res, next) {
  console.log(req.path);
  next();
});

// Serves our static files
server.use('/', express.static(path.join(__dirname, '../build/public')));
server.use('/assets', express.static(path.join(__dirname, '../assets')));
server.use('/update', updateBlog);

// Middleware that runs our router on all other requests.
server.use(function(request, response){

  let routes = <Router>{Routes}</Router>;
  let location = createLocation(request.url);

  // Matches the React-Router route to the path
  match( {routes, location}, (error, redirectLocation, renderProps) => {

    // Renders the wrapped component into an HTML string.
    response.send(ReactDOMServer.renderToStaticMarkup(
      <HtmlComponent markup={ReactDOMServer.renderToString(<RoutingContext {...renderProps} />)} />
    ));
  })
});

let port = process.env.PORT || 2000;
server.listen(port);
console.log('listening on port', port);
