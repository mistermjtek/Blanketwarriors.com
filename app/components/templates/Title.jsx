/**
 * Basic title page.  The default route.
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
          stuff
        </div>
      </div>
    );
  }
}
