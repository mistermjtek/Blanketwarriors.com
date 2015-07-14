'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

const Projects = React.createClass({
  render: function() {

    let projects = _.sortBy(this.props.collections.Projects, function(p) {
      return p.index;
    })

    return (
      <h1>PROJECTS!!!</h1>


    );
  }
});

export default Projects;
