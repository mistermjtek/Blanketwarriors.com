'use strict';
import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className="page">
        <img src="/assets/images/404.svg" onerror="this.src='/assets/basic/404.png'"/>
      </div>
    );
  }
}

export default NotFound;
