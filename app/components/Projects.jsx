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
    // Router.Link links to a route.  We pass in a project parameter to determine
    // which project view to show.
    const projects = _.sortBy(this.props.collections.Projects, project => project.index);

    const projectList = projects.map( project => {
      return (
        <Link className="list-item" key={project.name} to={"/projects/" + project.name} params={project}>
          <h1 className="list-item-title">{project.title}</h1>
        </Link>
      );
    });

    return (
      <div className="wrapper projects content page">
        <div className="list">{projectList}</div>
      </div>
    );
  }
};
