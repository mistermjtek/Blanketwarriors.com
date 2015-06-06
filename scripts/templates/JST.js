var app = app || {};
(function () {
  'use strict';

  app.JST = {};

  // Navigation
  app.JST['app/nav'] = _.template(
    '<a class="goHome" href="home">Home</a>' +
    '<a class="goAbout" href="about">About</a>' +
    '<a class="goProjects" href="projects">Projects</a>' +
    '<a class="goBlog" href="blog">Blog</a>');

  // Home Page
  app.JST['tab/home'] = _.template(
    '<div class="title"><h1>Blanket Warriors</h1></div>' +
    '<a href="https://github.com/Blanket-Warriors"><img src="../images/GitHub-Mark-Light-120px-plus.png"></a>'
    );

  // About Page
  app.JST['tab/about'] = _.template(
    '<div class="post">' +
      '<p>We are cool people</p>' +
    '</div>');

  // Projects Page
  app.JST['tab/projects'] = _.template('');
  app.JST['tab/projects/projectList'] = _.template('<div class="postList"><h2><%=title%></h2></div>');

  app.JST['tab/projects/project'] = _.template(
    '<div class="post">' +
    '<div class="description"> <%=description%> </div>' +
    '<a class="github" href="<%=github%>"><img src="../images/GitHub-Mark-120px-plus.png"/></a>' +
    '</div>');


  // Blog Page
  app.JST['tab/posts'] = _.template('');
  app.JST['tab/posts/postList'] = _.template(
    '<div class="postList">' +
      '<h2><%=title%></h2>' +
      '<h6><%=subtitle%></h6>' +
      '<p class="author">' +
        '<img class = "authorImage"src=<%=authorImage%> alt=<%=author%>> <%=author%> | <%=publishDate%>' +
      '</p>' +
    '</div>'

    );

  app.JST['tab/posts/post'] = _.template(
    '<div class="post">' +
    '</div>');

})();
