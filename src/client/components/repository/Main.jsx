import React from 'react';
import List from './List';
import Languages from './Languages';
import './styles/Main.less';

const Main = () => (
  <div className="repositories-main">
    <List />
    <Languages />
  </div>
);

export default Main;
