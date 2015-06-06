var app = app || {};
(function() {
  'use strict';
  app.HomeView = Backbone.View.extend({

    id: 'Home',

    template: app.JST['tab/home'],

    render: function() {
      this.$el.html(this.template());
      return this;
    }

  });
})();
