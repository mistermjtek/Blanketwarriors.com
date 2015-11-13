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
<<<<<<< HEAD
  searchPredicate(item) {
    var searchState = this.state.search;
    var searchTerms = [item.title, item.author.name, item.date, item.tags];
    return matchExists(searchTerms);

    function matchExists(toCheck) {
      if(typeof toCheck === 'string' || typeof toCheck === 'number') {
        // Check globally for the search parameters, ignoring case.
        return Boolean(toCheck.toString().match(new RegExp(searchState, 'ig')));
=======
  static searchPredicate(item) {
    _.reduce([item.title, item.author.name, item.date, item.tags], (toCheck) => {
      if(typeof toCheck === 'string' || typeof toCheck === 'number') {
        // Check globally for the search parameters, ignoring case.
        return Boolean(toCheck.match(new RegExp(this.state.search, 'ig')));
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
      }
      if(typeof toCheck === 'object') {
        // Return the result from nested items.
        return _.some(toCheck, (nestedToCheck) => {
          return matchExists(nestedToCheck);
        });
      }
      return false;
<<<<<<< HEAD
    };
=======
    });
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
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

<<<<<<< HEAD
    // All tags currently being used to describe every post.  Not currently being used.
=======
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
    const tags = _.reduce(this.state.unfiltered, (total, blogPost) => {
      return _.union(total, blogPost.tags)
    });

    const blogPostList = _.map(blogPosts, (blogPost) => {
      return (
<<<<<<< HEAD
        <Link className="list-item" to={"/blog/" + blogPost.name} key={blogPost.name} params={blogPost}>
          <h1 className="list-item-title">{blogPost.title}</h1>
        </Link>
=======
        <div className="bigLink" key={blogPost.name}>
          <Link to={"/blog/" + blogPost.name} params={blogPost}>
            <h1 className="item">{blogPost.title}</h1>
            <ul className="tags">
              {_.map(blogPost.tags, tag => <li className="tag" key={tag}>{tag}</li>)}
            </ul>
          </Link>
        </div>
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
      );
    });

    return (
<<<<<<< HEAD
      <div className="wrapper blog page">
        <div className="search-wrapper">
          <input
            type="search"
            placeholder="search..."
            className="search-input"
=======
      <div className="list blog page">
        <div className="searchWrapper">
          <input
            type="search"
            placeholder="search..."
            className="search"
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
            value={this.state.search}
            onChange={this.onSearchUpdate}
          />
        </div>
<<<<<<< HEAD

        <div className="wrapper">
          <div className="list posts">
            {blogPostList.length ? blogPostList : <div>There are no matching blog posts!</div>}
          </div>
=======
        <div className="posts">
          {blogPostList.length ? blogPostList : <div>There are no matching blog posts!</div>}
>>>>>>> 6fd58c0... [refactor] Refactors code to conform with the new javascript style guide
        </div>
      </div>
    );
  }
}
