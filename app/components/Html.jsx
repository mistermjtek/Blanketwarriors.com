/**
 * Html
 *
 * Html.js wraps all other components on server-rendered pages.  It is never
 * used client-side.  Includes all headers and script tags.
 *
 * Script tags for fonts are run at the beginning in order to avoid having
 * fonts changing after page load.  It DOES slow down the page load, and it would
 * be preferrable to get fonts from another source than typekit for that reason.
 */

'use strict';
import React from 'react';

export default class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Blanket Warriors</title>

          <meta charSet="utf-8" />
          <meta name="description" content="Home of the Blanket Warriors blog, projects, and stream." />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0, width=device-width" />

          <link rel="shortcut icon" type="image/png" href="/assets/images/phant.png" sizes="16x16 32x32 64x64" />

          <script src="//use.typekit.net/uyv6nqe.js"></script>
          <script src="/assets/fonts.js"></script>
          <link href="/styles.css" type="text/css" rel="stylesheet" />
        </head>
        <body>
          <main className="wrapper">
            <div dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
          </main>
          <script src="/bundle.js" async></script>
        </body>
      </html>
    );
  }
}
