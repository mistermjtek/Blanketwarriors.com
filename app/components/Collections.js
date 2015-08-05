'use strict';
import bigDaddy from './projects/bigDaddy';
import tokki from './projects/tokki';
import unearth from './projects/unearth';
import codingCrockPot from './projects/codingCrockPot';
import blogPosts from '../assets/Blog/metadata.js';
import blogContent from '../lib/posts.js';

for(var key in blogPosts) {
  blogPosts[key].content = blogContent[key];
}
Array.prototype.slice.call(blogPosts);

const Collections = {
  Projects: [
    codingCrockPot,
    tokki,
    unearth,
    bigDaddy,
  ],
  BlogPosts: blogPosts
};

export default Collections;
