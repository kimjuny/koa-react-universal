import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import { listRepositories } from '../../models/actions/repository';
import { objectToQueryString } from '../../../shared/utils/url';
import './styles/Navigator.less';

class Navigator extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super();
    this.state = { value: '' };
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  onEnter() {
    const { dispatch } = this.props;
    const query = {
      q: this.state.value,
      sort: 'stars',
      order: 'desc',
    };
    dispatch(listRepositories({ query }));
    this.context.router.history.push(`/repositories${objectToQueryString(query)}`);
  }

  render() {
    return (
      <div className="navigator">
        <div className="content">
          <Link className="icon" to="/">
            <svg aria-hidden="true" fill="white" height="32" version="1.1" viewBox="0 0 16 16" width="32">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </Link>
          <div className="search">
            <TextInput
              value={this.state.value}
              onChange={this.onChange}
              onEnter={this.onEnter}
              size="sm"
              theme="dark"
              placeholder="Search Github"
            />
          </div>
          <div className="navigation-items">
            <a>Pull Requests</a>
            <a>Issues</a>
            <a>Marketplace</a>
            <a>Gist</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Navigator);
