// Projects.js
// ---------

// The list of projects.  Very different from the Project component, which hosts
// the project pages.

'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

class Projects extends React.Component {
  render() {
    // `https://lodash.com/docs#sortBy`
    let projects = _.sortBy(this.props.collections.Projects, function(p) {
      return p.index;
    });

    // Router.Link links to a route.  We pass in a project parameter to determine
    // which project view to show.
    let projectList = projects.map(function(project) {
      return (
        <div className="bigLink" key={project.name}>
          <Router.Link to="project" params={project}>
            <h1>{project.title}</h1>
          </Router.Link>
        </div>
      );
    });

    return <div className="list projects page">{projectList}</div> ;
  }
}

export default Projects;
