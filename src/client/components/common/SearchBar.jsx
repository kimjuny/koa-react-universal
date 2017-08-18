import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends PureComponent {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  state = {
    value: '',
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  onSearch() {
    if (this.state.value) {
      this.context.router.history.push(`/repositories?q=${this.state.value}&sort=stars&order=desc`);
    } else {
      throw new Error('repository cannot be null');
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.onChange}
          placeholder="Repositories..."
        />
        <button
          type="button"
          onClick={this.onSearch}
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchBar;
