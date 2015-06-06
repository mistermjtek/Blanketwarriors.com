var app = app || {};
(function() {
  'use strict';
  app.Router = new (Backbone.Router.extend({
    routes: {
      '':             'home',
      'home':         'home',
      'projects/:id': 'project',
      'projects':     'projects',
      'about':        'about',
      'blog/:id':    'post',
      'blog':         'posts'
    },
    start: function() {
      Backbone.history.start({pushState: true});
    },
    home: function() {
      var home = new app.HomeView();
      $('main').html(home.render().el);
    },
    project: function(id) {
      var projects = new app.Projects();
      projects.on('sync', function() {
        var projectView = new app.ProjectView({model: projects.get(id)});
        $('main').html(projectView.render().el);
      });
    },
    projects: function() {
      var projects = new app.Projects();
      projects.on('sync', function() {
        var projectsView = new app.ProjectsView({collection: projects});
        $('main').html(projectsView.render().el);
      });
    },
    about: function() {
      var about = new app.AboutView();
      $('main').html(about.render().el);
    },
    post: function(id) {
      var posts = new app.Posts();
      posts.on('sync', function() {
        var postView = new app.PostView({model: posts.get(id)});
        $('main').html(postView.render().el);
        replaceGists();
        Prism.highlightAll();
      });
    },
    posts: function() {
      var posts = new app.Posts();
      posts.on('sync', function() {
        var blog = new app.PostsView({collection: posts});
        $('main').html(blog.render().el);
      });
    }
  }))();

})();
