'use strict';
import React from 'react';
import _ from 'lodash';

const BlogPost = React.createClass({
  blogPost: function() {
    let name = this.props.params.name;
    return _.find(this.props.collections.BlogPosts, function(p) {
      return p.name === name;
    })
  },

  render: function() {
    let blogPost = this.blogPost();
    return React.createElement(blogPost.component, _.extend({}, this.props, {blogPost: blogPost}));
  }
});

export default BlogPost;
