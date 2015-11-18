'use strict';
import _ from 'lodash';
import React from 'react';
import Disqus from 'molecule/Disqus'
import Highlight from 'atoms/Highlight';

export default class BlogPost extends React.Component {
  // Find the blog post from Collections.
  get blogPost() {
    return _.find(this.props.collections.BlogPosts, post => {
      return post.name === this.props.params.name;
    });
  }

  render() {
    const blogPost = this.blogPost;

    return (
      <article className="wrapper post page">

        <Header { ...blogPost }/>

        <section>
          <Highlight innerHTML={true}> {blogPost.content} </Highlight>
        </section>

        <footer>
          <Diqus shortname="blanket-warriors" />
        </footer>

      </article>
    );

    let props = _.assign({}, this.props, {blogPost});
    return <BlogPostComponent {...props} />
  }
}
