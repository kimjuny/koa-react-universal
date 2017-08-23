import React from 'react';
import PropTypes from 'prop-types';
import Navigator from '../components/common/Navigator';
import TextInput from '../components/common/TextInput';
import './styles/Home.less';

class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super();
    this.state = { search: '' };
    this.onChange = this.onChange.bind(this);
    this.onEnter = this.onEnter.bind(this);
  }

  onChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  onEnter() {
    const search = this.state.search;
    if (search) {
      this.context.router.history.push(`/repositories?q=${search}&sort=stars&order=desc`);
    } else {
      throw new Error('repository cannot be null');
    }
  }

  render() {
    return (
      <div className="home">
        <div className="main code-lines">
          <Navigator />
          <div className="center">
            <div className="title">
              Koa React Universal
            </div>
            <div className="spec">
              lightweight React-Koa2 universal boilerplate, only what is essential!
            </div>
            <div className="search-area">
              <TextInput
                value={this.state.search}
                onChange={this.onChange}
                onEnter={this.onEnter}
                placeholder="Search Github Repositories (i.e. webpack、react...)"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
