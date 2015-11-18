/**
 * NotFound
 *
 * Really exciting NotFound page.
 * TODO: Need to update to reflect style of the main page.
 */

'use strict';
import React from 'react';
import Img from './SVGImg';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="wrapper notFound page">
      	<div className="content">
      		<div className="central-image">
        		<Img src="/assets/images/404.svg" fallback="/assets/images/404.png" />
        	</div>
        </div>
      </div>
    );
  }
}
