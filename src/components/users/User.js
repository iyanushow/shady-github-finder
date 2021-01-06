import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, repos, fetchUser, fetchUserRepos } = githubContext;

  useEffect(() => {
    fetchUser(match.params.login);
    fetchUserRepos(match.params.login);
    // return () => {
    //   cleanup
    // }
    // eslint-disable-next-line
  }, []);

  // Destructure user object
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    company,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Link to='/' className='btn btn-light'>
        Back To Search
      </Link>
      <p style={{ display: 'inline-block', fontSize: '1.2rem' }}>
        Hireable:{' '}
        {hireable ? (
          <i className='fas fa-check text-success' />
        ) : (
          <i className='fas fa-times-circle text-danger' />
        )}
      </p>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt={login}
            className='round-img'
            style={{ width: '150px' }}
          />

          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div className='all-center'>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p> {bio} </p>
            </Fragment>
          )}

          <a href={html_url} className='btn btn-dark my-1'>
            {' '}
            Visit Github Profile
          </a>

          <ul style={{ fontSize: '1.3rem' }}>
            <li>
              <strong>Username:</strong> {login}
            </li>
            <li>
              {company && (
                <>
                  <strong>Company:</strong> {company}
                </>
              )}
            </li>
            <li>
              {blog && (
                <>
                  <strong>Website:</strong> {blog}
                </>
              )}
            </li>
          </ul>
        </div>
      </div>

      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-danger'>Public Repos: {public_repos}</div>
        <div className='badge badge-dark'>Gists: {public_gists}</div>
      </div>

      <Repos repos={repos} />
    </>
  );
};

export default User;
