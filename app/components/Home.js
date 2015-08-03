'use strict';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <img src="/assets/images/title.svg" onerror="this.src='/assets/images/title.png'"/>
    );
  }
}

export default Home;
