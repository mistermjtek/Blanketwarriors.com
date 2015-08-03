'use strict';
import _ from 'lodash';
import React from 'react';
import Highlight from './Highlight.js'

class BlogPost extends React.Component {
  constructor() {
    super();
  }

  blogPost() {
    let name = this.props.params.name;
    return _.find(this.props.collections.BlogPosts, function(p) {
      return p.name === name;
    });
  }

  render() {
    const blogPost = this.blogPost();
    class Component extends React.Component {
      render() {
        return (
          <div className="blog-post">
            <h1>{blogPost.title}</h1>
            <h2>{blogPost.date}</h2>
            <h2>{blogPost.description}</h2>
            <Highlight innerHTML={true}> {blogPost.content} </Highlight>
          </div>
        );
      }
    }
    return React.createElement(Component, _.extend({}, this.props, {blogPost: blogPost}));
  }
}

export default BlogPost;
