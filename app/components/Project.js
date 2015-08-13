'use strict';
import _ from 'lodash';
import React from 'react';

class Project extends React.Component {
  project() {
    let name = this.props.params.name;
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
