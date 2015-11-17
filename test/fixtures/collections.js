import _ from 'lodash';
import projects from 'fixtures/projects';
import blogPosts from 'fixtures/blogMeta';
import blogContent from 'fixtures/blogContent';

_.forEach(blogPosts, function setBlogContent(blogPost, index) {
  blogPost.content = blogContent[index];
});

export default {
  projects,
  blogPosts
};

