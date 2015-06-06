var app = app || {};
(function() {
  'use strict';
  app.PostListView = Backbone.View.extend({

    template: app.JST['tab/posts/postList'],

    events: {
      'click': 'viewPost'
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    viewPost: function(event){
      event.preventDefault();
      app.Router.navigate('/blog/' + this.model.id, { trigger: true });
    }

  });
})();
