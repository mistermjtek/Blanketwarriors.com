'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'basic-scraping',
  index: 1,
  date: '03/12/2015',
  title: 'Introduction to Scraping with Node.js',
  description: 'Introduction to scraping with Node.js'
};

blogPost.component = React.createClass({
  render: function() {
    return (
      <div>
        <h1>{blogPost.title}</h1>
        <h2>{blogPost.date}</h2>
        <h2>{blogPost.description}</h2>

      </div>
    );
  }
})

export default blogPost;
