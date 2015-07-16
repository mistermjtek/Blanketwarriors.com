'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var project = {
  name: 'tokki',
  index: 1,
  title: 'Tokki',
  description: 'A real-time audience engagement and interaction tool to improve live events'
};

project.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{project.title}</h1>
        <h2>{project.description}</h2>
        <Highlight className="javascript">{
          "var project = {\n name: 'tokki',\n index: 1,\n title: 'Tokki',\n description: 'A real-time audience engagement and interaction tool to improve live events'\n};"
        }</Highlight>
      </div>
    );
  }
});

export default project;
