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
        <div className="bigLink" key={blogPost.name}>
          <Router.Link to="blogPost" params={blogPost}>
            <h1 className="item">{blogPost.title}</h1>
            <h3>{blogPost.description}</h3>
            <h4 className="info"><img src={blogPost.author.image} />  {blogPost.author.name} | {blogPost.date}</h4>
          </Router.Link>
        </div>
      );
    });

    return <div className="list">{blogPostList}</div>;
  }
}

export default Blog;
