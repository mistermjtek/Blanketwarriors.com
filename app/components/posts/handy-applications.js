'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'handy-applications',
  index: 2,
  date: '03/12/2015',
  title: 'Speed it Up - Handy Applications',
  description: 'Speed up everything you do with these applications!'
};

blogPost.component = React.createClass({
  render: function() {
    return (
      <div className="blog-post">
        <h1>{blogPost.title}</h1>
        <h2>{blogPost.date}</h2>
        <h2>{blogPost.description}</h2>

      </div>
    );
  }
})

export default blogPost;
