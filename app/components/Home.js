'use strict';
import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img src="/assets/images/title.svg" onerror="this.src='/assets/images/title.png'"/>
      </div>
    );
  }
}

export default Home;
