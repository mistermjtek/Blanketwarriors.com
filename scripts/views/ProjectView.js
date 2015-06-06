var app = app || {};
(function() {
  'use strict';
  app.ProjectView = Backbone.View.extend({

    id:'project',
    template: app.JST['tab/projects/project'],

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });
})();
