'use strict';
import React from 'react';

const BlogPost = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        <h2>{this.props.data.author}</h2>
        <p>{this.props.data.content}</p>
      </div>
    );
  }
});

export default BlogPost;
