'use strict';
import React from 'react';

const Blog = React.createClass({
  render: function() {
    return (
      <div>
        <h1>BLOG!!!</h1>
        this.props.posts.map(function(post) {
         // <Post
         //  title={post.title}
         //  author={post.author}
         //  content={post.content}
         // />
        });
      </div>
    );
  }
});

export default Blog;
