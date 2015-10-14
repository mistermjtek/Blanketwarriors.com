/**
 * BlogPost
 *
 * A single blog post.  This is a larger file because we have something like a
 * template for blog posts, and we're dealing with both syntax highlighting and
 * comments.
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import Highlight from './Highlight';

export default class BlogPost extends React.Component {
  constructor() {
    super();
    this.dsq;
    this.disqus_shortname = 'blanket-warriors';
    this.addDisqus = _.bind(this.addDisqus, this);
  }

  // Disqus setup and use.
  addDisqus() {
    if(document.getElementById('disqus')){
      return DISQUS.reset( {
        reload: true,
        config: function () {}
      });
    }
    this.dsq = document.createElement('script');
    _.assign(this.dsq, {
      id: 'disqus',
      type: 'text/javascript',
      async: true,
      src: '//' + this.disqus_shortname + '.disqus.com/embed.js'
    });
    document.getElementsByTagName('body')[0].appendChild(this.dsq);
  }

  componentDidMount() {this.addDisqus();}

  // Find the blog post from Collections.
  getBlogPost() {
    return _.find(this.props.collections.BlogPosts, post => {
      return post.name === this.props.params.name;
    });
  }

  render() {
    const blogPost = this.getBlogPost();
    class Component extends React.Component {
      render() {
        return (
          <div className="blog-post page">
            <header className="title">
              <h1>{blogPost.title}</h1>
              <h2>{blogPost.description}</h2>
              <h3>
                <img src={'/assets/Blog' + blogPost.author.image}/>
                {blogPost.author.name} | {blogPost.date}
              </h3>
            </header>
            <div className="blog-body">
              <Highlight innerHTML={true} className="content"> {blogPost.content} </Highlight>
              <div id="disqus_thread" />
            </div>
          </div>
        );
      }
    }

    // TODO: Refactor to avoid using React.createElement
    return React.createElement(Component, _.assign({}, this.props, {blogPost: blogPost}));
  }
}
