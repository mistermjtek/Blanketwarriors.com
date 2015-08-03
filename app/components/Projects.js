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
            {project.title}
          </Router.Link>
        </div>
      );
    });

    return <div className="list">{projectList}</div> ;
  }
}

export default Projects;
