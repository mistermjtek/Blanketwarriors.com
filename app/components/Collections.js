'use strict';
import bigDaddy from './projects/bigDaddy';
import tokki from './projects/tokki';
import unearth from './projects/unearth';
import crockPot from './projects/crockPot';
import blogPosts from '../assets/Blog/metadata.js';
import blogContent from '../lib/posts.js';
import _ from 'lodash';

_.forEach(blogPosts, function(value, key){
  blogPosts[key].content = blogContent[key];
});

const Collections = {
  Projects: [
    crockPot,
    tokki,
    unearth,
    bigDaddy,
  ],
  BlogPosts: blogPosts
};

export default Collections;
