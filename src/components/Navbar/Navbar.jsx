import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePen, faHouse } from '@fortawesome/free-solid-svg-icons';
import { login, logout } from '../../helpers/auth';
import './Navbar.css';

const Navbar = ({ isAuth, setIsAuth }) => {
  const onLogin = () => {
    login(setIsAuth);
  };

  const onLogout = () => {
    logout(setIsAuth);
  }

  return (
    <nav className="navbar px-5">
      <div className="wrap-left">
        <NavLink to="/" className="link mx-2">
          <FontAwesomeIcon icon={faHouse} className="me-1" />
          Home
        </NavLink>
        {isAuth && (
          <NavLink to="post" className="link mx-2">
            <FontAwesomeIcon icon={faFilePen} className="me-1" />
            Post
          </NavLink>
        )}
      </div>
      <div className="wrap-right">
        {isAuth ? (
          <button className="btn btn-black-radius" type="button" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-black-radius" type="button" onClick={onLogin}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
