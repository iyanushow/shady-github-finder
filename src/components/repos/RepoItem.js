import React from 'react';
import PropTypes from 'prop-types';

const RepoItem = ({ repo }) => {
  return (
    <div className='card '>
      <h4 style={{ fontSize: '1.4rem' }}>
        <a href={repo.html_url}>{repo.name} </a>
      </h4>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
