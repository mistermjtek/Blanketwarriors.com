/**
 * Img
 *
 * A component to help us deal with image fallback options.
 */

'use strict';
import _ from 'lodash';
import React from 'react';

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: this.props.src };
    _.bindAll(this, 'handleError');
  }

  handleError() {
    this.setState({ src: this.props.fallback });
  }

  render() {
    return (
      <img src={ this.state.src } onError={ this.handleError } {...this.props} />
    );
  }
};

Img.propTypes = {
  src: React.PropTypes.string.isRequired,
  fallback: React.PropTypes.string,
  alt: React.PropTypes.string
};

Img.defaultProps = {
  fallback: undefined,
  alt: undefined
};

export default Img;
