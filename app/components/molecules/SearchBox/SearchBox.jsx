'use strict';
import _ from 'lodash';
import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search-wrapper">
        <input
          type="search"
          placeholder="search..."
          className="search-input"
          value={this.props.filterText}
        />
      </div>
    );
  }
}

Search.propTypes = {
  filterText: React.propTypes.string
}

Search.defaultProps = {
  filterText: ''
}

export default Search;
