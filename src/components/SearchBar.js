import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    term: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui center aligned basic segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div
            className="ui large icon input"
            style={{
              width: '60%',
            }}
          >
            <input
              type="text"
              placeholder="Search"
              onChange={(e) =>
                this.setState({
                  term: e.target.value,
                })
              }
            />
            <i
              className="search icon link"
              onClick={this.onFormSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
