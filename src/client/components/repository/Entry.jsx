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
      <div className="topics">
        { repository.topics.slice().splice(0, 4).map(topic => <div className="topic" key={topic}>{topic}</div>) }
      </div>
      <div className="update-time">
        { repository.updated_at }
      </div>
    </div>
    <div className="middle">
      <span className="language" />
      <p>{ repository.language }</p>
    </div>
    <div className="right">
      <svg className="start" height="20" role="img" version="1.1" viewBox="0 0 14 16" width="15">
        <path fillRule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z" />
      </svg>
      <p>
        { repository.stargazers_count }
      </p>
    </div>
  </div>
);

export default Entry;
