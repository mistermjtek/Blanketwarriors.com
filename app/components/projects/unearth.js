'use strict';
import React from 'react';

var project = {
  name: 'unearth',
  index: 2,
  title: 'Unearth',
  description: 'A mobile application that encourages exploration by allowing users to track where they’ve been and where they should go next.'
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
