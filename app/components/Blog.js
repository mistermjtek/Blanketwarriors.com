'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

class Blog extends React.Component {
  render() {
    let blogPosts = _.sortBy(this.props.collections.BlogPosts, function(p) {
      return p.index;
    });

    let blogPostList = _.map(blogPosts, function(blogPost) {
      return (
        <div className="bigLink" key={blogPost.name}>
          <Router.Link to="blogPost" params={blogPost}>
            <h1 className="item">{blogPost.title}</h1>
          </Router.Link>
        </div>
      );
    });

    return <div className="list page">{blogPostList}</div>;
  }
}

export default Blog;
