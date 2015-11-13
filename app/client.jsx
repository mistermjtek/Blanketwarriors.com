/**
 * Client.js
 *
 * Client.js serves as the starting point for React on client-side.
 * It runs the React Router and append the resulting component to the DOM.
 * This gets included on the client side via a script tag in components/Html.js
 */

'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Router} from 'react-router';
import {createHistory} from 'history';
import Routes from './components/Routes';
import './stylesheets/style.scss';

let history = createHistory();

// Renders the React-Router using the HTML browser history.
render(<Router history={history}>{Routes}</Router>, document.getElementById('blankets'));

