var app = app || {};

(function () {
  app.Projects = Backbone.Firebase.Collection.extend({
    model: app.Project,
    url: new Firebase("https://blanket-warriors.firebaseio.com/projects")
  });
})();
