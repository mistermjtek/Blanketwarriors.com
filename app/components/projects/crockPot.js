'use strict';
import React from 'react';
import Highlight from '../Highlight.js';

var project = {
  name: 'crock-pot',
  index: 0,
  title: 'Crock-Pot',
  titleImage: '',
  listImage: '',
  description: 'A real-time tool for collaborative writing and editing',
  link: {
    repository: 'https://github.com/blanket-warriors/Crock-Pot',
    application: 'http://www.codingcrockpot.com',
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
          <p>Crock-Pot is a collaborative tool that lets two people code or write together in real-time. As one person types, the other immediately sees the results in their remote instance of the program.</p>
          <img alt="crockPot1" src="/assets/projects/crockPot/crockPot1.png"></img>
          <p>Crock-Pot supports syntax highlighting for various languages, and multiple color-schemes.</p>
          <img alt="crockPot2" src="/assets/projects/crockPot/crockPot2.png"></img>
          <p>It take a significant amount of inspiration from codeshare.io, which was frustrating us because of its frequent down-time.  For us, Crock-Pot fixes this limitation and will hopefully surpass codeshare.io with other features in the near future.</p>
          <img alt="crockPot3" src="/assets/projects/crockPot/crockPot3.png"></img>
          <p>Crock-Pot is built with Socket.io, Node.js, Express.js, PostgreSQL, and Codemirror.  The front-end is entirely in javascript and Socket.io, which was used for Socket.io's various polyfills and niceties.  No need to re-invent the wheel here.</p>
          <img alt="crockPot4" src="/assets/projects/crockPot/crockPot4.png"></img>
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
