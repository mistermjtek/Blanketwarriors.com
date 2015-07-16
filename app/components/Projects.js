'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

const Projects = React.createClass({
  render: function() {

    let projects = _.sortBy(this.props.collections.Projects, function(p) {
      return p.index;
    });

    let projectList = projects.map(function(project) {
      return (
        <Router.Link to="project" params={project} key={project.name}>
          {project.title}
        </Router.Link>
      );
    });

    return (
      <div>{projectList}</div>
    );
  }
});

export default Projects;
