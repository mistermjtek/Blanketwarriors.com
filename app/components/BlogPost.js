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
          <div className="blog-post page">
            <header className="title">
              <h1>{blogPost.title}</h1>
              <h2>{blogPost.description}</h2>
              <h3><img src={'/assets/Blog' + blogPost.author.image}/> {blogPost.author.name} | {blogPost.date}</h3>
            </header>
            <Highlight innerHTML={true} className="content"> {blogPost.content} </Highlight>
          </div>
        );
      }
    }
    return React.createElement(Component, _.extend({}, this.props, {blogPost: blogPost}));
  }
}

export default BlogPost;
