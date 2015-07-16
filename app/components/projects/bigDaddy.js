'use strict';
import React from 'react';

var project = {
  name: 'bigDaddy',
  index: 0,
  title: 'Big Daddy',
  description: 'Big Daddy finds any mention of the word "data" and replaces it with the superior word "daddy".'
};

project.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
      </div>
    );
  }
})

export default project;
