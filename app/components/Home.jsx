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
<<<<<<< HEAD
      <div className="wrapper">
        <div className="home content">
          <h1>Blanket Warriors</h1>
          <img
=======
      <div className="home page">
        <div className="content">
          <h1 className="title">Blanket Warriors</h1>
          <img
            className="logo"
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
            src="/assets/images/phant.svg"
            onerror="this.src='/assets/images/phant.png'"
          />
        </div>
      </div>
    );
  }
}
