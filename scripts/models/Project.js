var app = app || {};

(function () {
  app.Project = Backbone.Model.extend({
    defaults: {
      title: null,
      github: null,
      description: null
    }
  });
})();
