'use strict';
import _ from 'lodash';
import React from 'react';

class Blog extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: ''
    }
  }

  onChange() {
    this.setState({searchString: event.target.value});
  }

  render() {
    const unfilteredPosts = _.sortBy(this.props.posts, blogPost => blogPost.index);

    return (
      <div className="wrapper blog page">
        <SearchBox filterText={this.state.searchString} />
        <List filterText={this.state.filterText} items={unfilteredPosts} context="/Blog/" />
      </div>
    );
  }
}

Blog.propTypes = {
  posts: React.propType.array
}

Blog.defaultProps = {
  posts: []
}

export default Blog;
