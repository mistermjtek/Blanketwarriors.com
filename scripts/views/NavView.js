var app = app || {};
(function() {
  'use strict';
  app.NavView  = Backbone.View.extend({

    template: app.JST['app/nav'],

    events: {
      'click a.goHome': 'home',
      'click a.goBlog': 'posts',
      'click a.goAbout': 'about',
      'click a.goProjects': 'projects',
    },

    home: function(event){
      event.preventDefault();
      $('nav a').removeClass('selected');
      event.currentTarget.className = event.currentTarget.className + ' selected';
      app.Router.navigate('', { trigger: true });
    },

    posts: function(event){
      event.preventDefault();
      $('nav a').removeClass('selected');
      event.currentTarget.className = event.currentTarget.className + ' selected';
      app.Router.navigate('blog', { trigger: true });
    },

    about: function(event){
      event.preventDefault();
      $('nav a').removeClass('selected');
      event.currentTarget.className = event.currentTarget.className + ' selected';
      app.Router.navigate('about', { trigger: true });
    },

    projects: function(event){
      event.preventDefault();
      $('nav a').removeClass('selected');
      event.currentTarget.className = event.currentTarget.className + ' selected';
      app.Router.navigate('projects', { trigger: true });
    },

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });
})();
