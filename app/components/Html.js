'use strict';
import React from 'react';

class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Blanket Warriors</title>

          <meta charSet="utf-8" />
          <meta name="description" content="Home of the Blanket Warriors blog, projects, and stream." />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width" />

          <link rel="shortcut icon" type="image/png" href="/assets/favicon.png" sizes="16x16 32x32 64x64" />
          <link href="http://fonts.googleapis.com/css?family=Merriweather:400,400italic,300italic,300,700,700italic|Quattrocento+Sans:400,700" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" type="text/css" href="/assets/stylesheets/prism.css" />
          <link href="/styles.css" type="text/css/" rel="stylesheet" />

        </head>
        <body>
          <div dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          <script src="/bundle.js" async></script>
        </body>
      </html>
    );
  }
}

export default Html;
