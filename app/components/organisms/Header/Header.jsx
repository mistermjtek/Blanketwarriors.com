'use strict';
import _ from 'lodash';
import React from 'react';
import Author from 'molecules/AuthorDetail'

class Header extends React.Component {
  render() {
    <header {...this.props}>
      <h1>{this.props.title}</h1>
      <h2>{this.props.description}</h2>
      <Author date={this.props.date} {...this.props.author} />
    </header>
  }
}

Header.propTypes = {
  title: React.propTypes.string.required,
  description: React.propTypes.string,
  date: React.props.date,
  author: {
    image: React.props.string,
    name: React.props.string
  }
}

export default Header;
