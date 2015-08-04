'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var project = {
  name: 'bigDaddy',
  index: 0,
  title: 'Big Daddy',
  titleImage: '',
  listImage: '',
  description: 'Big Daddy finds any mention of the word "data" and replaces it with the superior word "daddy".',
  link: {
    repository: 'https://github.com/ivebencrazy/BigDaddy',
    application: 'https://chrome.google.com/webstore/detail/big-daddy/hkmhjlfnbofokojdaokamifognipbbkl?hl=en',
  }
};

project.component = React.createClass({
  render: function() {
    return (
      <div className={project.name + ' project'}>
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <a href={project.link.repository}>Repo Link</a>
        <a href={project.link.application}>Application Link</a>
        <img alt="bigDaddy1" src="/assets/projects/bigDaddy/bigDaddy1.png"/>
        <img alt="bigDaddy2" src="/assets/projects/bigDaddy/bigDaddy2.png"/>
        <img alt="bigDaddy3" src="/assets/projects/bigDaddy/bigDaddy3.png"/>
      </div>
    );
  }
})

export default project;
