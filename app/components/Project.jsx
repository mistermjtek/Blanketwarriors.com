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
  constructor(props) {
    super(props);
  }

  getProject() {
    return _.find(this.props.collections.Projects, (project) => {
      return project.name === this.props.params.name;
    });
  }

  render() {
    const project = this.getProject();
    const ProjectComponent = project.component;
    const props = _.assign(this.props, {project: project});

    return <ProjectComponent {...props} />
  }
}
