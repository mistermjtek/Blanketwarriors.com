'use strict';
import React from 'react';
import Highlight from '../Highlight.js'

var blogPost = {
  name: 'how-do-they-do-it',
  index: 3,
  date: '03/12/2015',
  title: 'How do they DOOOOOO this!?!?',
  description: 'Handy plugins to explore the internet'
};

blogPost.component = React.createClass({
  render: function() {
    return (
      <p>Hello</p>
    );
  }
})

export default blogPost;
