import React from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';
import './styles/List.less';

const List = ({ repositories }) => {
  const renderTotal = () => {
    if (repositories.data) {
      return <h2>{ repositories.total } repository results</h2>;
    }
    return null;
  };

  const renderList = () => {
    if (!repositories.data) {
      return null;
    }
    return repositories.data.map(repository =>
      <Entry key={repository.full_name} repository={repository} />);
  };

  return (
    <div className="list">
      { renderTotal() }
      { renderList() }
    </div>
  );
};

const mapStateToProps = state => ({ repositories: state.repository.repositories });

export default connect(mapStateToProps)(List);
