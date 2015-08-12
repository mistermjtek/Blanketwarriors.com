'use strict';
import _ from 'lodash';
import React from 'react';
import Highlight from './Highlight.js'

class BlogPost extends React.Component {
  constructor() {
    super();
    this.disqus_shortname = 'blanket-warriors';
    this.dsq;
  }

  blogPost() {
    let name = this.props.params.name;
    return _.find(this.props.collections.BlogPosts, function(p) {
      return p.name === name;
    });
  }

  componentDidMount() {
    if(document.getElementById('disqus')){
      DISQUS.reset({
        reload: true,
        config: function () {}
      });
      return;
    }
    this.dsq = document.createElement('script');
    _.assign(this.dsq, {
      id: 'disqus',
      type: 'text/javascript',
      async: true,
      src: '//' + this.disqus_shortname + '.disqus.com/embed.js'
    });
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(this.dsq);
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
            <div className="blog-body">
              <Highlight innerHTML={true} className="content"> {blogPost.content} </Highlight>
              <div id="disqus_thread"></div>
            </div>
          </div>
        );
      }
    }
    return React.createElement(Component, _.extend({}, this.props, {blogPost: blogPost}));
  }
}

export default BlogPost;
