'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var project = {
  name: 'big-daddy',
  index: 3,
  title: 'Big Daddy',
  titleImage: '',
  listImage: '',
  description: 'The Daddy of all Chrome extensions',
  link: {
    repository: 'https://github.com/ivebencrazy/BigDaddy',
    application: 'https://chrome.google.com/webstore/detail/big-daddy/hkmhjlfnbofokojdaokamifognipbbkl?hl=en',
  }
};

project.component = React.createClass({
  render: function() {
    return (
      <div className={project.name + ' project'}>
        <div className="title">
          <img alt="bigDaddy1" src="/assets/projects/bigDaddy/bigDaddy1.png"/>
        </div>
        <div className="content">
          <h2>Big Daddy is the daddy of all Chrome extensions.</h2>
          <p>He takes every mention of the word "Data", </p>
          <img alt="bigDaddy2" src="/assets/projects/bigDaddy/bigDaddy2.png"/>
          <p>and replaces it with the superior word "Daddy".</p>
          <img alt="bigDaddy3" src="/assets/projects/bigDaddy/bigDaddy3.png"/>
          <div className="links">
            <a href="http://ivebencrazy.github.io/BigDaddy/"><img src="/assets/favicon.png"/></a>
            <a href={project.link.repository}><img src="/assets/images/icons/GitHub-Mark-Light.svg"/></a>
            <a href={project.link.application}><img src="/assets/images/icons/Chrome-Web-Store.png"/></a>
          </div>
        </div>
      </div>
    );
  }
})

export default project;
