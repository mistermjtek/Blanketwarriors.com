var app = app || {};
(function() {
  'use strict';
  app.ProjectView = Backbone.View.extend({

    id:'project',

    render: function() {
      this.model.set('description', this.model.get('description').replace(/{n}/g, '\n'));
      this.$el.html('<div class="content">' +
          '<a href="' + this.model.get('link') + '"">' + '<h1 class="title">' + this.model.get('title') + '</h1>' + '</a>' +
          '<div class="description">' + '<p>' + this.model.get('description') + '</p>' +
            '<a class="github" href="' + this.model.get('github') + '"><img src="../images/GitHub-Mark-120px-plus.png"/></a>' +
          '</div>' +
        '</div>');
      return this;
    }

  });
})();
