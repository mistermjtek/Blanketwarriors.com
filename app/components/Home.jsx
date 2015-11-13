/**
 * Home
 *
 * Basic landing page.  The default route.
 */

'use strict';
import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home content">
          <h1>Blanket Warriors</h1>
          <img
            src="/assets/images/phant.svg"
            onerror="this.src='/assets/images/phant.png'"
          />
        </div>
      </div>
    );
  }
}
