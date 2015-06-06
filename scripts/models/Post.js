var app = app || {};

(function () {
  app.Post = Backbone.Model.extend({
    defaults: {
      title: null,
      publishDate: null,
      updateDate: null,
      content: null
    }
  });
})();
