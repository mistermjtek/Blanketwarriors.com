'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'node-static-server',
  index: 0,
  date: '03/26/2015',
  title: 'Building a Simple Static File Server in Node.js',
  description: 'This is a project about static servers.  wooo.'
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
