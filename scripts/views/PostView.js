var app = app || {};
(function() {
  'use strict';
  app.PostView = Backbone.View.extend({

    id: 'post',

    render: function() {
      this.model.set('content', this.model.get('content').replace(/{n}/g, '\n'));
      this.$el.html('<h1 class="title">' + this.model.get('title') + '</h1>' +
        '<div class="content">' + this.model.get('content') + '</div>');
      return this;
    }
  });
})();
