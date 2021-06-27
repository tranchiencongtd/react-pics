import React, { Component } from 'react';
import unsplash from '../api/unsplash';

import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 50 },
    });
    this.setState({ images: response.data.results });
    console.log(this.state.images);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
