'use strict';
import React from 'react';
import Highlight from '../Highlight';

var project = {
  name: 'unearth',
  index: 2,
  title: 'Unearth',
  titleImage: '',
  listImage: '',
  description: 'A mobile application to encourage exploration',
  link: {
    repository: 'https://github.com/unearth'
  }
};

project.component = React.createClass({
  render() {
    return (
      <article className={project.name + ' wrapper project'}>

        <header>
          <img alt="unearth1" src="/assets/projects/unearth/unearth1.svg" onerror="this.src='/assets/projects/unearth/unearth1.png'" />
          <h2>{project.description}</h2>
        </header>

        <section>
          <p>Unearth is a native mobile application for iOS and Android, built in Ionic.  It layers a "fog of war" over a world map, and lets users clear the map by walking around.</p>
          <img alt="unearth2" src="/assets/projects/unearth/unearth2.png" />
          <p>Unearth aims not to get people outside, but to encourage people to explore new places when they do.  You'd be surprised by the weird directions you walk when you've got to just "fill out that last part of the map".</p>
          <img alt="unearth3" src="/assets/projects/unearth/unearth3.png" />
          <img alt="unearth4" src="/assets/projects/unearth/unearth4.png" />
          <p>Unearth has been one of the more ambitious projects we've taken on, just because of the sheer amount of data that has to flow through the server, database, and through mobile devices.  Optimizations with maps and the database were useful, but making very conscious decisions on when to query the server ended up being some of the most difficult issues we faced.</p>
          <p>Unearth was created using a combination of Angular.js, Ionic, Node.js, Express.js, PostgreSQL, Mapbox, Leaflet.js</p>
        </section>

        <footer>
          <div className="links">
            <a href={project.link.repository}><img src="/assets/images/icons/GitHub-Mark.svg"/></a>
          </div>
        </footer>

      </article>
    );
  }
})

export default project;
