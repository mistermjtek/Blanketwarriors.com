'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'speed-up-sublime',
  index: 4,
  date: '03/21/2015',
  title: 'Speed it up - Sublime',
  description: 'You will type so fast yo'
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
