import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/img/theRecipeBox_logo.png';

export default function Header(props) {
  return (
    <header>
      <img src={logo}/>
      
      {props.currentUser ? (
        <>
          <p>{props.currentUser.username}</p>
          <button onClick={props.handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="/login">Login/Register</Link>
      )}
      <hr />
      {props.currentUser && (
        <>
          <Link to="/foods">Foods</Link>
          <Link to="/flavors">Flavors</Link>
          <hr />
        </>
      )}
    </header>
  );
}
