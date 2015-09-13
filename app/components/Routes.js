// Routes.js
// ---------

// Routes.js is the starting point for all the routes.  It is used by
// both client.js and server.js to run the routes.  It wraps the changing views
// with the Layout component, which includes such things as the navigation bar.
// Passes Collections.js through to be used in Project and Blog routes.

'use strict';
import React from 'react';
import Router from 'react-router';

import Layout from './Layout';
import Home from './Home';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import About from './About';
import Projects from './Projects';
import Project from './Project';
import NotFound from './NotFound';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

const routes = (
  <Route handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>

    <Route name="blog" path="/blog/?" handler={Blog}/>
    <Route name="blogPost" path="/blog/:name" handler={BlogPost}/>

    <Route name="about" path="/about/?" handler={About}/>
    <Route name="contact" path="/contact/?" handler={Contact}/>

    <Route name="projects" path="/projects/?" handler={Projects}/>
    <Route name="project" path="/projects/:name" handler={Project}/>

    <NotFoundRoute name="/not-found" handler={NotFound}/>
  </Route>
);

export default routes;
