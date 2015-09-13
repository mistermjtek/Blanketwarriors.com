// Highlight.js
// ---------

// Uses Prism for syntax highlighting.  Used in BlogPost.js

'use strict';
import React from 'react';
import Prism from '../lib/prism.js';

class Highlight extends React.Component{
  componentDidMount() {
    this.highlightCode();
  }
  componentDidUpdate() {
    this.highlightCode();
  }
  highlightCode() {
    Prism.highlightAll(React.findDOMNode(this));
  }
  render() {
    if (this.props.innerHTML) {
      return <div dangerouslySetInnerHTML={{__html: this.props.children[1]}} className={this.props.className || null}></div>;
    } else {
      return <pre><code className={this.props.className}>{this.props.children}</code></pre>;
    }
  }
}

Highlight.defaultProps = {
  innerHTML: false,
  className: null
}

export default Highlight;
