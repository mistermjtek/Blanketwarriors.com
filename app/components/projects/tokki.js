'use strict';
import React from 'react';
import Highlight from '../Highlight.js';

var project = {
  name: 'tokki',
  index: 1,
  title: 'Tokki',
  titleImage: '',
  listImage: '',
  description: 'A real-time audience engagement and interaction tool to improve live events',
  link: {
    repository: 'https://github.com/ivebencrazy/Tokki',
    application: 'http://www.tokkiapp.com',
  }
};

project.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <a href={project.link.repository}>Repo Link</a>
        <a href={project.link.application}>Application Link</a>
        <img alt="tokki1" src="/assets/projects/tokki/tokki1.png"/>
        <img alt="tokki2" src="/assets/projects/tokki/tokki2.png"/>
        <img alt="tokki3" src="/assets/projects/tokki/tokki3.png"/>
      </div>
    );
  }
});

export default project;
