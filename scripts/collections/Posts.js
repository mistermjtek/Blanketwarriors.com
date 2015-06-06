var app = app || {};

(function () {
  app.Posts = Backbone.Firebase.Collection.extend({
    model: app.Post,
    url: new Firebase("https://blanket-warriors.firebaseio.com/posts")
  });
})();
