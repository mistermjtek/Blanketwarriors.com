var app = app || {};
(function() {
  'use strict';
  app.PostsView = Backbone.View.extend({

    id: 'blog',

    template: app.JST['tab/posts'],

    render: function() {
      this.$el.empty();
      this.$el.append(this.template());
      this.collection.forEach(this.addOne, this);
      return this;
    },

    addOne: function(post) {
      var postListView = new app.PostListView({model: post});
      this.$el.append(postListView.render().el);
    }
  });
})();
