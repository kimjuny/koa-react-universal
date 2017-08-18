import React from 'react';
import './styles/Entry.less';

const Entry = ({ repository }) => (
  <div className="entry">
    <div className="left">
      <div className="full-name">
        <a href="">{ repository.full_name }</a>
      </div>
      <div className="description">
        { repository.description }
      </div>
      <div className="update-time">
        { repository.updated_at }
      </div>
    </div>
    <div className="middle">
      <p>{ repository.language }</p>
    </div>
    <div className="right">
      <p>{ repository.stargazers_count }</p>
    </div>
  </div>
);

export default Entry;
