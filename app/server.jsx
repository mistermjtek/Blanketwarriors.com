/**
 * Server.js
 *
 * Server.js serves as the starting point for React on server-side.
 * It uses Express to serve static built files from /build/public, and static
 * resource files from /assets.  For any other request, it uses React Router,
 * and wraps that with our Html component.
 */

'use strict';
import _ from 'lodash';
import path from 'path';
import React from 'react';
import express from 'express';
import createLocation from 'history/lib/createLocation';
import {Router, RoutingContext, match} from 'react-router';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';

import Routes from './components/Routes';
import updateBlog from './lib/updateBlog';
import HtmlComponent from './components/Html';

const server = express();

// Logs out requests just for reference.
server.use(function(request, response, next) {
  console.log(request.path);
  next();
});

// Serve our static files
server.get(new RegExp(/\.svg$/), function(request, response) {
  response.header('Content-Type', 'image/svg+xml');
  response.status(200).sendFile(path.join(path.resolve(__dirname), '../', request.path));
});

server.use('/', express.static(path.join(__dirname, '../build/public')));
server.use('/update', updateBlog);
server.use('/assets', express.static(path.join(__dirname, '../assets')));

// Middleware that runs our router on all other requests.
server.use(function(request, response){

  const routes = <Router>{Routes}</Router>;
  const location = createLocation(request.url);

  // Matches the React-Router route to the path
  match( {routes, location}, (error, redirectLocation, renderProps) => {
    if(error) {
      return response.status(500).send(error.message);
    }
    if(redirectLocation) {
      return response.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }
    const isNotFound = Boolean(_.find(renderProps.routes, (route) => route.status === 404));
    const status = isNotFound ? 404 : 200;

    const markup = renderToString(<RoutingContext {...renderProps} />);
    const html = renderToStaticMarkup(<HtmlComponent markup={markup} />);

    response.status(status).send(html);
  });
});

const port = process.env.PORT || 2000;
server.listen(port);
console.log('listening on port', port);
