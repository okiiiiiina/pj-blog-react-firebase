import React from 'react'
import {
    NavLink
  } from "react-router-dom";
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePen, faHouse } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ isAuth }) => {
  return (
    <nav className="navbar px-5">
        <div className="wrap-left">
          <NavLink to="/" className="link mx-2">
          <FontAwesomeIcon icon={faHouse} className="me-1" />
            Home
          </NavLink>
          { isAuth ?
            <NavLink to="post" className="link mx-2">
              <FontAwesomeIcon icon={faFilePen} className="me-1" />
              Post
            </NavLink> : ''
          }
        </div>
        <div className="wrap-right">
          { isAuth ?
            <button className="btn btn-black-radius" type="button">Logout</button> :
            <button className="btn btn-black-radius" type="button">Login</button>
          }
        </div>
    </nav>
  )
}

export default Navbar
