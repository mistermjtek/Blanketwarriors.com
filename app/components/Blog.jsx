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
    _.bindAll(this, ['onSearchUpdate', 'searchPredicate']);
  }

  // Updates filtering
  onSearchUpdate(event) {
    this.setState( {search: event.target.value}, () => {
      this.setState( {
        filtered: _.filter(this.state.unfiltered, this.searchPredicate)
      });
    });
  }

  // Takes each unfiltered listItem and returns a boolean for matching search criteria.
  searchPredicate(listItem) {
    var searchState = this.state.search;
    var searchTerms = [listItem.title, listItem.author.name, listItem.date, listItem.tags];
    return matchExists(searchTerms);

    function matchExists(toCheck) {

      // Check information values globally for the search parameters, ignoring case.
      if(typeof toCheck === 'string' || typeof toCheck === 'number') {
        return Boolean(toCheck.toString().match(new RegExp(searchState, 'ig')));
      }

      // Return the result from any nested items.
      if(typeof toCheck === 'object') {
        return _.some(toCheck, (nestedToCheck) => {
          return matchExists(nestedToCheck);
        });
      }
      return false;
    };
  }

  render() {
    const blogPosts = this.state.search ? this.state.filtered : this.state.unfiltered;

    const blogPostList = _.map(blogPosts, (blogPost) => {
      return (
        <Link className="list-item" to={"/blog/" + blogPost.name} key={blogPost.name} params={blogPost}>
          <h1 className="list-item-title">{blogPost.title}</h1>
        </Link>
      );
    });

    return (
      <div className="wrapper blog page">
        <div className="search-wrapper">
          <input
            type="search"
            placeholder="search..."
            className="search-input"
            value={this.state.search}
            onChange={this.onSearchUpdate}
          />
        </div>

        <div className="wrapper">
          <div className="list posts">
            {blogPostList.length ? blogPostList : <div>There are no matching blog posts!</div>}
          </div>
        </div>
      </div>
    );
  }
}
