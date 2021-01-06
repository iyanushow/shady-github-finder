import React, { useReducer } from 'react';
import axios from 'axios';
import GiihubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  FETCH_USER,
  FETCH_USER_REPOS,
  FETCH_DATA,
} from '../Types';

let client_id, client_secret;

if (process.env.NODE_ENV !== 'production') {
  client_id = process.env.REACT_APP_CLIENT_ID;
  client_secret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  client_id = process.env.CLIENT_ID;
  client_secret = process.env.CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const fetchInitialUsers = async () => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users?client_id=${client_id}&client_secret=${client_secret}`
    );

    dispatch({
      type: FETCH_DATA,
      payload: data,
    });
  };

  // search users
  const searchUsers = async (value) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${value}&?client_id=${client_id}&client_secret=${client_secret}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: data.items,
    });
  };

  // fetch user
  const fetchUser = async (login) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${login}?client_id=${client_id}&client_secret=${client_secret}`
    );

    dispatch({
      type: FETCH_USER,
      payload: data,
    });
  };
  // fetch repos
  const fetchUserRepos = async (login) => {
    setLoading();
    const { data } = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${client_id}&client_secret=${client_secret}`
    );

    dispatch({
      type: FETCH_USER_REPOS,
      payload: data,
    });
  };

  // clear users
  const clearUsers = async () => dispatch({ type: CLEAR_USERS });

  // set alert

  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });
  return (
    <GiihubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        fetchUser,
        fetchUserRepos,
        fetchInitialUsers,
      }}
    >
      {props.children}
    </GiihubContext.Provider>
  );
};

export default GithubState;
