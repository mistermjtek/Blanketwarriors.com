'use strict';
import _ from 'lodash';
import React from 'react';

class Disqus extends React.Component {
  constructor(props) {
  	super(props);
    this.dsq;
    _.bindAll(this, ['addDisqus']);
  }

  addDisqus() {
    if(document.getElementById('disqus')){
      return DISQUS.reset( {
        reload: true,
        config: function () {}
      });
    }

    this.dsq = document.createElement('script');

    _.assign(this.dsq, {
      id: 'disqus',
      type: 'text/javascript',
      async: true,
      src: '//' + this.props.shortname + '.disqus.com/embed.js'
    });

    document.getElementsByTagName('body')[0].appendChild(this.dsq);
  }

  componentDidMount() {this.addDisqus();}

	render() {
		return <div id="disqus_thread" {...this.props}/>
	});
}

Disqus.propTypes = {
	shortname: React.propType.string
}

Disqus.defaultProps = {
	shortname: 'blanket-warriors'
}

export default Disqus;
