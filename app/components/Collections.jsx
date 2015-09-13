/**
 * Collections
 *
 * Organizes blog posts and projects.  Projects are included individually for
 * more customization.  Blog Content is the result of running Bloginator.js.
 */

'use strict';
import BigDaddy from './projects/BigDaddy';
import Tokki from './projects/Tokki';
import Unearth from './projects/Unearth';
import CrockPot from './projects/CrockPot';
import blogPosts from '../../assets/Blog/metadata';
import blogContent from '../lib/posts';
import _ from 'lodash';

_.forEach(blogPosts, function(value, key) {
  blogPosts[key].content = blogContent[key];
});

const collections = {
  Projects: [
    CrockPot,
    Tokki,
    Unearth,
    BigDaddy,
  ],
  BlogPosts: blogPosts
};

export default collections;
