import React from 'react';
import { connect } from 'react-redux';
import './styles/Tabs.less';

const Tabs = ({ repositories }) => (
  <div className="tabs">
    <div className="tabs-main">
      <a className="tab tab-selected">Repositories<span>48K</span></a>
      <a className="tab">Code<span>3M</span></a>
      <a className="tab">Commits<span>622K</span></a>
      <a className="tab">Issues<span>169K</span></a>
      <a className="tab">Wikis<span>10K</span></a>
      <a className="tab">Users<span>207</span></a>
    </div>
  </div>
);

const mapStateToProps = state => ({ repositories: state.repository.repositories });

export default connect(mapStateToProps)(Tabs);
