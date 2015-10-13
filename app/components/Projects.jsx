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
        <div className="bigLink" key={project.name}>
          <Link to={"/projects/" + project.name} params={project}>
            <h1>{project.title}</h1>
          </Link>
        </div>
      );
    });

    return <div className="list projects page">{projectList}</div> ;
  }
};
