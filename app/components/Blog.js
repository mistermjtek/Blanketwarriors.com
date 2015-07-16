'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

const Blog = React.createClass({
  render: function() {

    let blogPosts = _.sortBy(this.props.collections.BlogPosts, function(p) {
      return p.index;
    });

    let blogPostList = blogPosts.map(function(blogPost) {
      return (
        <Router.Link to="blogPost" params={blogPost} key={blogPost.name}>
          <span className="subtitle-item">{blogPost.title + '\n'}</span>
        </Router.Link>
      );
    });

    return (
      <div>{blogPostList}</div>
    );
  }
});

export default Blog;
