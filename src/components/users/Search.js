import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState(' ');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('please enter a name', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          id=''
          placeholder='Search Users'
          value={text}
          onChange={onChange}
        />
        <button type='submit' className='btn btn-dark btn-block'>
          Search
        </button>
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block my-1'
          onClick={githubContext.clearUsers}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default Search;
