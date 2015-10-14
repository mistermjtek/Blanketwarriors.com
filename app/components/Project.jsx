/**
 * Project
 *
 * Hosts each individual project page.  Unrelated to Projects, which is a list
 * of all projects.
 */

'use strict';
import _ from 'lodash';
import React from 'react';

export default class Project extends React.Component {
  getProject() {
    // Finds the project from Collections
    return _.find(this.props.collections.Projects, (project) => {
      return project.name === this.props.params.name;
    });
  }

  render() {
    let project = this.getProject();

    // TODO: Refactor to avoid using React.createElement
    return React.createElement(project.component, _.assign({}, this.props, {project: project}));
  }
}
