'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

class Blog extends React.Component {
  render() {
    let blogPosts = _.sortBy(this.props.collections.BlogPosts, function(p) {
      return p.index;
    });

    let blogPostList = blogPosts.map(function(blogPost) {
      return (
        <div className="link" key={blogPost.name}>
          <Router.Link to="blogPost" params={blogPost}>
            <span className="subtitle-item">{blogPost.title + '\n'}</span>
          </Router.Link>
        </div>
      );
    });

    return <div className="list">{blogPostList}</div>;
  }
}

export default Blog;
