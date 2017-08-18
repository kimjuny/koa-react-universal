import React from 'react';
import { connect } from 'react-redux';
import Entry from './Entry';

const List = ({ repositories }) => {
  const render = () => {
    if (!repositories.data) {
      return <div>Loading...</div>;
    }
    return repositories.data.map(repository =>
      <Entry key={repository.full_name} repository={repository} />);
  };

  return (
    <div>
      { render() }
    </div>
  );
};


const mapStateToProps = state => ({ repositories: state.repository.repositories });

export default connect(mapStateToProps)(List);
