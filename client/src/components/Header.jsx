import React from 'react';
import logo from '../assets/images/img/theRecipeBox_logo2.png';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import '../styles/Header.css';

export default function Header(props) {
 
  return (
    <header>
      <div className="header-logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>


        {props.currentUser ? (
          <>
            <div className="header-hello">
              hello {props.currentUser.username} {props.currentUser.id}
            </div>
            <div className="button-frame">
              <button onClick={props.handleLogout} className="header-button">
                Logout
              </button>
            </div>
          </>
        ) : (
          <div>
            <Link to="/login">
              <button className="header-button">Login</button>
            </Link>
            <Link to="/register">
              <p className="header-register">Register</p>
            </Link>
          </div>
        )}
     
      {/* <hr /> */}
    </header>
  );
}
