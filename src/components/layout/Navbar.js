import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {
  return (
    <Fragment>
      <nav className='navbar bg-primary'>
        <Link to='/'>
          <h1>
            <i className={icon} /> {title}
          </h1>
        </Link>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;

Navbar.defaultProps = {
  title: 'Github-Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
