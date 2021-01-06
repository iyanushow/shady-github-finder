import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ login, avatar_url, html_url }) => {
  return (
    <Fragment>
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt={login}
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
            {' '}
            More{' '}
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default UserItem;
