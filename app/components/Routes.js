'use strict';
import React from 'react';
import Router from 'react-router';

import Layout from './Layout';
import Home from './Home';
import Blog from './Blog';
import BlogPost from './BlogPost';
import Contact from './Contact';
import Projects from './Projects';
import Project from './Project';
import NotFound from './NotFound';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

const routes = (
  <Route name="app" path="/" handler={Layout}>
    <DefaultRoute name="home" handler={Home}/>

    <Route name="blog" path="blog/?" handler={Blog}/>
    <Route name="blogPost" path="blog/:name" handler={BlogPost}/>

    <Route name="Contact" path="contact/?" handler={Contact}/>

    <Route name="projects" path="projects/?" handler={Projects}/>
    <Route name="project" path="projects/:name" handler={Project}/>

    <NotFoundRoute name="/not-found" handler={NotFound}/>
  </Route>
);

export default routes;
