'use strict';
import React from 'react';
import Highlight from '../Highlight.js';

var project = {
  name: 'unearth',
  index: 2,
  title: 'Unearth',
  titleImage: '',
  listImage: '',
  description: 'A mobile application that encourages exploration by allowing users to track where they’ve been and where they should go next.',
  link: {
    repository: 'https://github.com/unearth'
  }
};

project.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <a href={project.link.repository}>Repo Link</a>
        <img alt="unearth1" src="/assets/projects/unearth/unearth1.svg" onerror="this.src='/assets/projects/unearth/unearth1.png'" />
      </div>
    );
  }
})

export default project;
