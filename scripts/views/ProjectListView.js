var app = app || {};
(function() {
  'use strict';
  app.ProjectListView = Backbone.View.extend({

    template: app.JST['tab/projects/projectList'],

    events: {
      'click': 'viewPost'
    },

    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    viewPost: function(event){
      event.preventDefault();
      app.Router.navigate('/projects/' + this.model.id, { trigger: true });
    }

  });
})();
