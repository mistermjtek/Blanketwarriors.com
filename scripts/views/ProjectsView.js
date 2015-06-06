var app = app || {};
(function() {
  'use strict';
  app.ProjectsView = Backbone.View.extend({

    id: 'projects',
    template: app.JST['tab/projects'],

    render: function() {
      this.$el.empty();
      this.$el.append(this.template());
      this.collection.forEach(this.addOne, this);
      return this;
    },

    addOne: function(project) {
      var projectListView = new app.ProjectListView({model: project});
      this.$el.append(projectListView.render().el);
    }

  });
})();
