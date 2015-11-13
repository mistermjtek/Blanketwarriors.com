/**
 * Highlight
 *
 * Uses Prism for syntax highlighting.  Used in BlogPost.js
 */

'use strict';
import React from 'react';
import Prism from '../lib/prism';
<<<<<<< HEAD
import {findDOMNode} from 'react-dom';

class Highlight extends React.Component {
  componentDidMount() { Prism.highlightAll(findDOMNode(this)); }
  componentDidUpdate() { Prism.highlightAll(findDOMNode(this)); }

  render() {
    if (this.props.innerHTML) {
      return (
        <div
        dangerouslySetInnerHTML={{__html: this.props.children[1]}}
        className={this.props.className || null}
        />
      );
=======

class Highlight extends React.Component {
  componentDidMount() { Prism.highlightAll(React.findDOMNode(this)); }
  componentDidUpdate() { Prism.highlightAll(React.findDOMNode(this)); }

  render() {
    if (this.props.innerHTML) {
      return (<div
        dangerouslySetInnerHTML={{__html: this.props.children[1]}}
        className={this.props.className || null}
      />);
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
    } else {
      return <pre><code className={this.props.className}> {this.props.children} </code></pre>;
    }
  }
}

Highlight.defaultProps = {
  innerHTML: false,
  className: null
}

export default Highlight;
