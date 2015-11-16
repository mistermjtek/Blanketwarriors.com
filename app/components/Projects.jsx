/**
 * Projects
 *
 * The list of projects.  Very different from the Project component, which hosts
 * the project pages.
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router';

export default class Projects extends React.Component {
  render() {
    const projects = _.sortBy(this.props.collections.Projects, project => project.index);
    const projectComponents = _.map(projects, project => {
      return (
        <Link className="list-item" key={project.name} params={project} to={"/projects/" + project.name}>
          <h1 className="list-item-title">{project.title}</h1>
        </Link>
      );
    });

    return (
      <div className="wrapper projects content page">
        <div className="list">{projectComponents}</div>
      </div>
    );
  }
};
