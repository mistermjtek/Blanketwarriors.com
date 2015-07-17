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
        <Highlight className="language-javascript">{"console.log('la');" }</Highlight>
        <Highlight className="language-javascript">{"var express = require('express');var app = express();\napp.use(express.static(__dirname + '/public'));\napp.listen(process.env.PORT || 3000);"}</Highlight>
        <div>
        </div>
      </div>
    );
  }
});

export default project;
