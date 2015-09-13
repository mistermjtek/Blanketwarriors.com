// Project.js
// ---------

// Hosts each individual project page.  Unrelated to Projects, which is a list
// of all projects.

'use strict';
import _ from 'lodash';
import React from 'react';

class Project extends React.Component {
  project() {
    let name = this.props.params.name;

    // Finds the project from Collections
    return _.find(this.props.collections.Projects, function(p) {
      return p.name === name;
    })
  }

  render() {
    let project = this.project();
    return React.createElement(project.component, _.assign({}, this.props, {project: project}));
  }
}

export default Project;
