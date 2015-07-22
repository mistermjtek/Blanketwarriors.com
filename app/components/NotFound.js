'use strict';
import React from 'react';

const NotFound = React.createClass({
  render: function() {
    return (
      <img src="/assets/images/404.svg" onerror="this.src='/assets/basic/404.png'"/>
    );
  }
});

export default NotFound;
