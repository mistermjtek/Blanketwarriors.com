'use strict';
import React from 'react';

const Home = React.createClass({
  render: function() {
    return (
      <img src="/assets/images/title.svg" onerror="this.src='/assets/images/title.png'"/>
    );
  }
});

export default Home;
