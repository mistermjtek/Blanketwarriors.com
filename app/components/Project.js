'use strict';
import React from 'react';
import _ from 'lodash';

const Project = React.createClass({
  project: function() {
    let name = this.props.params.name;
    return _.find(this.props.collections.Projects, function(p) {
      return p.name === name;
    })
  },

  render: function() {
    let project = this.project();
    return React.createElement(project.component, _.extend({}, this.props, {project: project}));
  }
});

export default Project;
