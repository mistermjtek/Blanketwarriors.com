'use strict';
import React from 'react';
import Highlight from '../Highlight.js';

var project = {
  name: 'tokki',
  index: 1,
  title: 'Tokki',
  titleImage: '',
  listImage: '',
  description: 'An audience engagement and interaction tool for live events',
  link: {
    repository: 'https://github.com/ivebencrazy/Tokki',
    application: 'http://www.tokkiapp.com',
  }
};

project.component = React.createClass({
  render: function() {
    return (
      <div className={project.name + ' project'}>
        <div className="content">
          <header className="title">
            <h1>{project.title}</h1>
            <h2>{project.description}</h2>
          </header>
          <p>Tokki is a tool that allows presenters to get a better gauge on how their speaking is being received.  Tokki collects live data from audience members' desktop and mobile devices, and relays that data to a presenter.  This can allow for a presenter to not only adjust presentations on the fly, but also give them the power to look at past events to determine what went well and what didn't.</p>
          <p>On launch, Tokki presents a user with the option to either host a session or enter a session ID to vote and contribute information to a session. </p>
          <img alt="tokki1" src="/assets/projects/tokki/tokki1.png"></img>
          <p>A voter is presented with the ability to choose a rating between -2 to +2 depending on their comfort with the material.  </p>
          <img alt="tokki2" src="/assets/projects/tokki/tokki2.png"></img>
          <p>A host is presented with such information as the current Session ID to share, their current average (averaged from the entire audience), and their historical average (averaged from all the current averages).</p>
          <img alt="tokki3" src="/assets/projects/tokki/tokki3.png"></img>
          <p>Tokki is built using Angular.js, Node.js with Express, Socket.io, and Firebase.</p>
          <div className="links">
            <a href={project.link.repository}><img src="/assets/images/icons/GitHub-Mark-Light.svg"/></a>
            <a href={project.link.application}><img src="/assets/favicon.png"/></a>
          </div>
        </div>
      </div>
    );
  }
});

export default project;
