'use strict';
import React from 'react';
import Router from 'react-router';
import Routes from './components/Routes';

Router.run(Routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.body);
});

