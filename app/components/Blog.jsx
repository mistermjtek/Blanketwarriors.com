/**
 * Blog
 *
 * The list of blog posts.  Unrelated to BlogPost.js
 */

'use strict';
import _ from 'lodash';
import React from 'react';
import {Link} from 'react-router';

export default class Blog extends React.Component {

  constructor(props) {
    super();
    this.state = {
      unfiltered: _.sortBy(props.collections.BlogPosts, blogPost => blogPost.index),
      filtered: [],
      search: ''
    }
    //_.bindAll(this, this.onSearchUpdate, this.onTagUpdate, this.resetSearch);
    this.onSearchUpdate = _.bind(this.onSearchUpdate, this);
    this.onTagUpdate = _.bind(this.onTagUpdate, this);
    this.resetSearch = _.bind(this.resetSearch, this);
  }

  // Takes each unfiltered item and returns a boolean for matching search criteria.
  static searchPredicate(item) {
    _.reduce([item.title, item.author.name, item.date, item.tags], (toCheck) => {
      if(typeof toCheck === 'string' || typeof toCheck === 'number') {
        // Check globally for the search parameters, ignoring case.
        return Boolean(toCheck.match(new RegExp(this.state.search, 'ig')));
      }
      if(typeof toCheck === 'object') {
        // Return the result from nested items.
        return _.some(toCheck, (nestedToCheck) => {
          return matchExists(nestedToCheck);
        });
      }
      return false;
    });
  }

  // Updates filtering
  onSearchUpdate(event) {
    this.setState( {search: event.target.value}, () => {
      this.setState( {
        filtered: _.filter(this.state.unfiltered, _.bind(this.searchPredicate, this))
      });
    });
  }

  // Updates filtering
  onTagUpdate(event) {
    this.setState( {search: event.target.innerText}, () => {
      this.setState( {
        filtered: _.filter(this.state.unfiltered, _.bind(this.searchPredicate, this))
      });
    });
  }

  // Updates filtering
  resetSearch() {
    this.setState( {search: ''}, () => {
      this.setState( {
        filtered: _.filter(this.state.unfiltered, _.bind(this.searchPredicate, this))
      });
    });
  }

  render() {
    const blogPosts = this.state.search ? this.state.filtered : this.state.unfiltered;

    const tags = _.reduce(this.state.unfiltered, (total, blogPost) => {
      return _.union(total, blogPost.tags)
    });

    const blogPostList = _.map(blogPosts, (blogPost) => {
      return (
        <div className="bigLink" key={blogPost.name}>
          <Link to={"/blog/" + blogPost.name} params={blogPost}>
            <h1 className="item">{blogPost.title}</h1>
            <ul className="tags">
              {_.map(blogPost.tags, tag => <li className="tag" key={tag}>{tag}</li>)}
            </ul>
          </Link>
        </div>
      );
    });

    return (
      <div className="list blog page">
        <div className="searchWrapper">
          <input
            type="search"
            placeholder="search..."
            className="search"
            value={this.state.search}
            onChange={this.onSearchUpdate}
          />
        </div>
        <div className="posts">
          {blogPostList.length ? blogPostList : <div>There are no matching blog posts!</div>}
        </div>
      </div>
    );
  }
}
