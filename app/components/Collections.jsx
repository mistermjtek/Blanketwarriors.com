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
import users from '../lib/users';

_.forEach(blogPosts, function(blogPost, index) {
  blogPost.content = blogContent[index];
});

const collections = {
  Projects: [
    CrockPot,
    Tokki,
    Unearth,
    BigDaddy,
  ],
  BlogPosts: blogPosts,
  userData: users
};

export default collections;
