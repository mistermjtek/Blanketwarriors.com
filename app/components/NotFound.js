'use strict';
import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <img src="/assets/images/404.svg" onerror="this.src='/assets/basic/404.png'"/>
    );
  }
}

export default NotFound;
