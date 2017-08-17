import React from 'react';
import { connect } from 'react-redux';
import { parse } from '../../shared/utils/url';

class Repository extends React.Component {
  componentDidMount() {
    const { dispatch, repositories, load } = this.props;
    const url = window.location.href;
    const query = parse(url).query;
    if (typeof load === 'function' && query !== repositories.query) {
      load(dispatch, url);
    }
  }

  render() {
    console.log(this.props.repositories);
    return (
      <div>repository</div>
    );
  }
}

const mapStateToProps = state => ({ repositories: state.repository.repositories });

export default connect(mapStateToProps)(Repository);
