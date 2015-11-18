/**
 * Home
 *
 * Basic landing page.  The default route.
 */

'use strict';
import React from 'react';
import Img from './SVGImg';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="home content">
          <h1>Blanket Warriors</h1>
          <Img
            src="/assets/images/phant.svg"
            alt="Phant"
            fallback="/assets/images/phant.png"
          />
        </div>
      </div>
    );
  }
}
