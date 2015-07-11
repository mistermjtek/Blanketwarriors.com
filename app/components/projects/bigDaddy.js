'use strict';
import React from 'react';

var project = {
  name: 'bigDaddy',
  index: 0,
  title: 'Big Daddy',
  description: 'An app that does something'
};

project.component = React.createClass({
  render: function() {
    return (
      <h1>Big Daddy</h1>
    );
  }
})

export default project;
