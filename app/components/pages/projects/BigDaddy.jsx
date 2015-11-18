'use strict';
import React from 'react';
import Highlight from '../Highlight';

var project = {
  name: 'big-daddy',
  index: 3,
  title: 'Big Daddy',
  titleImage: '',
  listImage: '',
  description: 'The Daddy of all Chrome extensions',
  link: {
    repository: 'https://github.com/ivebencrazy/BigDaddy',
    application: 'https://chrome.google.com/webstore/detail/big-daddy/hkmhjlfnbofokojdaokamifognipbbkl?hl=en',
  }
};

project.component = React.createClass({
  render() {
    return (
      <article className={project.name + ' wrapper project'}>

        <header>
          <h1>Big Daddy</h1>
          <img className="bigDaddy" alt="bigDaddy1" src="/assets/projects/bigDaddy/BigDaddy.png"/>
          <h2>The daddy of all Chrome extensions.</h2>
        </header>

        <section>
          <h3>BIG DADDY REPLACES YOUR DATA WITH YO DADDA</h3>
          <h4>BEFORE DADDIFICATION</h4>
          <img alt="bigDaddy2" src="/assets/projects/bigDaddy/before.png"/>
          <h4>AFTER DADDIFICATION</h4>
          <img alt="bigDaddy3" src="/assets/projects/bigDaddy/after.png"/>
        </section>

        <footer>
          <div className="links">
            <a href="http://ivebencrazy.github.io/BigDaddy/"><img src="/assets/images/phant.png" /></a>
            <a href={project.link.repository}><img src="/assets/images/icons/GitHub-Mark-Light.svg"/></a>
            <a href={project.link.application}><img src="/assets/images/icons/Chrome-Web-Store.png"/></a>
          </div>
        </footer>

      </article>
    );
  }
});

export default project;
