'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var project = {
  name: 'bigDaddy',
  index: 0,
  title: 'Big Daddy',
  repository: 'https://github.com/ivebencrazy/BigDaddy',
  description: 'Big Daddy finds any mention of the word "data" and replaces it with the superior word "daddy".'
};

project.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <img alt="bigDaddy1" src="/assets/projects/bigDaddy/bigDaddy1.png"/>
        <img alt="bigDaddy2" src="/assets/projects/bigDaddy/bigDaddy2.png"/>
        <img alt="bigDaddy3" src="/assets/projects/bigDaddy/bigDaddy3.png"/>
      </div>
    );
  }
})

export default project;
