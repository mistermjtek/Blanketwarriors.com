var app = app || {};
(function() {
  'use strict';
  app.AboutView = Backbone.View.extend({

    id: 'about',
    template: app.JST['tab/about'],

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });
})();
