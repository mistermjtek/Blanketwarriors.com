/**
 * Routes
 *
 * Routes.js is the starting point for all the routes.  It is used by
 * both client.js and server.js to run the routes.  It wraps the changing views
 * with the Layout component, which includes such things as the navigation bar.
 * Passes Collections.js through to be used in Project and Blog routes.
 */

'use strict';
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

import Layout from './Layout';
import Home from './Home';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Project from './Project';
import NotFound from './NotFound';

const routes = (
  <Route component={Layout}>
    <Route path="/" component={Home} />

    <Route path="blog" component={Blog} />
    <Route path="/blog/:name" component={BlogPost} />

    <Route path="about" component={About} />
    <Route path="contact" component={Contact} />

    <Route path="projects" component={Projects} />
    <Route path="projects/:name" component={Project} />

    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
