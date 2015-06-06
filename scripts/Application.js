var app = app || {};
(function() {
  'use strict';

  $(document).ready(function(){

    // Initializes the Navigation view and displays it
    var nav = new app.NavView();
    $('nav').html(nav.render().el);

    // Starts up the router
    app.Router.start();
  });
})();

