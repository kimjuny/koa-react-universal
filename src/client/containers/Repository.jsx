import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Navigator from '../components/common/Navigator';
import Tabs from '../components/repository/Tabs';
import Main from '../components/repository/Main';
import { parse } from '../../shared/utils/url';
import './styles/Repository.less';

class Repository extends React.Component {
  componentDidMount() {
    const { dispatch, repositories, load } = this.props;
    const url = window.location.href;
    const query = parse(url).query;
    if (typeof load === 'function' && !_.isEqual(query, repositories.query)) {
      load(dispatch, url);
    }
  }

  render() {
    return (
      <div>
        <Navigator />
        <Tabs />
        <Main />
      </div>
    );
  }
}

const mapStateToProps = state => ({ repositories: state.repository.repositories });

export default connect(mapStateToProps)(Repository);
