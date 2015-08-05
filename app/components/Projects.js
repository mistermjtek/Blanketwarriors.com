'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

class Projects extends React.Component {
  render() {
    let projects = _.sortBy(this.props.collections.Projects, function(p) {
      return p.index;
    });

    let projectList = projects.map(function(project) {
      return (
        <div className="bigLink" key={project.name}>
          <Router.Link to="project" params={project}>
            <h1>{project.title}</h1>
          </Router.Link>
        </div>
      );
    });

    return <div className="list page">{projectList}</div> ;
  }
}

export default Projects;
