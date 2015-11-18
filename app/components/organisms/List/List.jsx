'use strict';
import _ from 'lodash';
import React from 'react';
import ListItem from 'molecultes/ListItem';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  // Takes each unfiltered listItem and returns a boolean for matching search criteria.
  searchPredicate(listItem) {
    var searchState = this.state.search;
    var searchTerms = [ listItem.title, listItem.author.name, listItem.date, listItem.tags ];
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
    const items = this.props.filterText ? _.filter(this.props.items, this.searchPredicate) : this.props.items;

    const displayedItems = _.map(items, (item) => {
      item.to = this.props.context + item.name;
      return <ListItem { ...item } />;
    });

    return (
      <div className="wrapper">
        <div className="list posts">
          { items.length ? displayedItems : <div>There are no matching blog posts!</div> }
        </div>
      </div>
    );
  }
}

List.propTypes = {
  items: React.propType.array,
  filterText: React.propType.string;
  context: React.propType.string;
}

List.defaultProps = {
  items: [],
  filterText: '',
  filterText: '/'
}

export default List;
