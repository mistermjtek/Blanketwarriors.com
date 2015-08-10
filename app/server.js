'use strict';
import express from 'express';
import React from 'react';
import Router from 'react-router';
import Routes from './components/Routes';
import HtmlComponent from './components/Html';
import path from 'path';

const server = express();

server.use(function(req, res, next) {
  console.log(req.path);
  next();
});

server.use('/', express.static(path.join(__dirname, '../build/public')));
server.use('/assets', express.static(path.join(__dirname, '../assets')));

server.use(function(request, response){
  Router.run(Routes, request.path, function(Root, state) {
    let bodyElement = React.createFactory(Root)({
      params: state.params
    });

    let html = React.renderToStaticMarkup(
      <HtmlComponent markup={React.renderToString(bodyElement)} />
    );

    response.send(html);
  });
});

let port = process.env.PORT || 2000;
server.listen(port);
console.log('listening on port', port);
