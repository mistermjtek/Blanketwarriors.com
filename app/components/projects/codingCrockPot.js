'use strict';
import React from 'react';
import Highlight from '../Highlight.js';

var project = {
  name: 'codingCrockPot',
  index: 3,
  title: 'Coding Crock-Pot',
  repository: 'https://github.com/blanket-warriors/Crock-Pot',
  application: 'http://www.codingcrockpot.com',
  description: 'A real-time tool for collaborative writing'
};

project.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <a href={project.application}>Application Link</a>
        <a href={project.repository}>Repo Link</a>
      </div>
    );
  }
});

export default project;
