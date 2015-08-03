import Prism from '../lib/prism.js';
import React from 'react';

const Highlight = React.createClass({
  getDefaultProps: function () {
    return {
      innerHTML: false,
      className: null
    };
  },
  componentDidMount: function () {
    this.highlightCode();
  },
  componentDidUpdate: function () {
    this.highlightCode();
  },
  highlightCode: function () {
    Prism.highlightAll(this.getDOMNode());
  },
  render: function () {
    if (this.props.innerHTML) {
      return <div dangerouslySetInnerHTML={{__html: this.props.children[1]}} className={this.props.className || null}></div>;
    } else {
      return <pre><code className={this.props.className}>{this.props.children}</code></pre>;
    }
  }
});

export default Highlight;
