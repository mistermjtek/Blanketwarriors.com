# BlanketWarriors.com
  BlanketWarriors.com is a isomorphic website to host Blanket Warrior projects and blogs.

## Usage
  1. `npm install`
  2. `git clone https://github.com/Blanket-Warriors/Blog app/assets/Blog`
  3. `npm start`
  4. Refresh the blog with: `npm run build`

Generally you'd want to set up the blog folder with a webhook so that you can update your blog from github.  That's the idea at least.

## Technologies
Here are some of the technologies we used, and a little background on our thoughts about each:

### React
  Aside from just wanting to learn React, React is flexible enough to be used for client-rendered, server-rendered, or isomorphic applications, which was a big plus.  React is also fun because it feels more like building with patterns and just makes a lot of sense to use.

### Node.js + Express.js
  We were quite comfortable using Node and Express as Javascript developers, so this was a pretty easy choice.  Also, it makes sense if we want an isomorphic BlanketWarriors.com with React, as everything would be Javascript.

### Lodash
  The fastest and most up-to-date library of utility functions.  Not much to be said here.

### Webpack and Gulp
  Great build tools.  Webpack makes it really simple to use Sass and es6 with our code.  Gulp is good for automating tests(oh god where are they?) and other things that extend beyond the comfort zone of Webpack.

### Prism + Marked
  Bloginator.js uses marked to convert the blog post markdown from github into html strings we can render in React.  Prism makes sense for syntax highlighting just because it's pretty, fast, and easy to use.
