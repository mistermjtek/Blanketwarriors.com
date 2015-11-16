/**
 * SVGImg
 *
 * A component to help us deal with svg fallback options.
 */

'use strict';
import React from 'react';
import _ from 'lodash';

export default class SVGImg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: this.props.src,
      alt: this.props.alt
    };
    _.bindAll(this, 'handleError');
  }

  handleError() {
    this.setState({ src: this.props.fallback });
  }

  render() {
    return <img src={this.state.src} alt={this.state.alt} onError={this.handleError}/>;
  }
};
