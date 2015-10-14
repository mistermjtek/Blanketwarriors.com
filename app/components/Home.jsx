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
      <div className="home page">
        <div className="content">
          <h1 className="title">Blanket Warriors</h1>
          <img
            className="logo"
            src="/assets/images/phant.svg"
            onerror="this.src='/assets/images/phant.png'"
          />
        </div>
      </div>
    );
  }
}
