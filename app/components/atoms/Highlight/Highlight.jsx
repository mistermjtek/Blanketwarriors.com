'use strict';
import React from 'react';
import Prism from 'lib/prism';
import { findDOMNode } from 'react-dom';

class Highlight extends React.Component {
  componentDidMount() { Prism.highlightAll(findDOMNode(this)); }
  componentDidUpdate() { Prism.highlightAll(findDOMNode(this)); }

  render() {
    const children = this.props.childen;
    if(this.props.containsHTML) {
      return <div dangerouslySetinnerHTML={{__html: children[1]}} {...this.props} />
    } else {
      return <pre><code {...this.props}>{children}</code></pre>
    }
  }
}

Highlight.propTypes = {
  containsHTML: React.propTypes.boolean
}

Highlight.defaultProps = {
  containsHTML: false
};

export default Highlight;
