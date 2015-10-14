/**
 * NotFound
 *
 * Really exciting NotFound page.
 * TODO: Need to update to reflect style of the main page.
 */

'use strict';
import React from 'react';

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="page">
        <img src="/assets/images/404.svg" onerror="this.src='/assets/basic/404.png'" />
      </div>
    );
  }
}
