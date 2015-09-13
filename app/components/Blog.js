// Blog.js
// ---------

// The list of blog posts.  Unrelated to BlogPost.js

'use strict';
import _ from 'lodash';
import React from 'react';
import Router from 'react-router';

class Blog extends React.Component {

  constructor(props) {
    super();
    this.state = {
      unfiltered: _.sortBy(props.collections.BlogPosts, function(p) { return p.index; }),
      filtered: [],
      search: ''
    }
    this.onSearchUpdate = _.bind(this.onSearchUpdate, this);
    this.onTagUpdate = _.bind(this.onTagUpdate, this);
    this.resetSearch = _.bind(this.resetSearch, this);
  }

  // Takes each unfiltered item and returns a boolean for matching search criteria.
  filter(item) {
    var search = this.state.search;
    var check = function(toCheck) {
      if(typeof toCheck === 'string' || typeof toCheck === 'number'){
        return Boolean(toCheck.match(new RegExp(search, 'ig')));
      }
      if(typeof toCheck === 'object') {
        return _.some(toCheck, function(item) {
          return check(item);
        });
      }
      return false;
    };
    return check([item.title, item.author.name, item.date, item.tags]);
  }

  // Updates filtering
  onSearchUpdate(event) {
    this.setState({search: event.target.value}, _.bind(function(){
      this.setState({
        filtered: _.filter(this.state.unfiltered, _.bind(this.filter, this))
      });
    }, this));
  }

  // Updates filtering
  onTagUpdate(event) {
    this.setState({search: event.target.innerText}, _.bind(function(){
      this.setState({
        filtered: _.filter(this.state.unfiltered, _.bind(this.filter, this))
      });
    }, this));
  }

  // Updates filtering
  resetSearch() {
    this.setState({search: ''}, _.bind(function(){
      this.setState({
        filtered: _.filter(this.state.unfiltered, _.bind(this.filter, this))
      });
    }, this));
  }

  render() {
    let blogPosts = this.state.search ? this.state.filtered : this.state.unfiltered;
    let tags = _.reduce(this.state.unfiltered, function(total, blogPost) {
      // `https://lodash.com/docs#union`
      return _.union(total, blogPost.tags);
    });

    let blogPostList = _.map(blogPosts, function(blogPost) {
      return (
        <div className="bigLink" key={blogPost.name}>
          <Router.Link to="blogPost" params={blogPost}>
            <h1 className="item">{blogPost.title}</h1>
            <ul className="tags">
              {_.map(blogPost.tags, function(tag) { return <li className="tag" key={tag}>{tag}</li> })}
            </ul>
          </Router.Link>
        </div>
      );
    });
    blogPostList = blogPostList.length ? blogPostList : <div>There are no matching blog posts!</div>

    return (
      <div className="list blog page">
        <div className="searchWrapper">
          <input type="search" placeholder="search..." className="search" value={this.state.search} onChange={this.onSearchUpdate} />
        </div>
        <div className="posts">{blogPostList}</div>
      </div>
    );
  }
}

export default Blog;
