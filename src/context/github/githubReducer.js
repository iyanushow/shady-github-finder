import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  FETCH_USER,
  FETCH_USER_REPOS,
  FETCH_DATA,
} from '../Types';

export default (state, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case FETCH_USER_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
