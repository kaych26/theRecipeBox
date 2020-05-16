import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recipe_box_img from '../assets/images/img/recipe_box_blue.png';
import '../styles/Join.css';

export default function Join(props) {
  const link_path = props.currentUser ? '/recipe/create' : '/register';
  const button_text = props.currentUser ? 'Add Recipe' : 'Join us';
  return (
    <div className="join-outerframe">
      <div className="join-boxmsg-frame">
        <img src={recipe_box_img} />
        <h2 className="join-title">Join the Recipe Box</h2>
      </div>

      <p className="join-message">
        “ The pandemic changed our life style & many families are faced with
        cooking challenges. Let’s start sharing our cooking ideas by joining the
        Recipe Box.”
      </p>

      <div className="login-button-frame">
        <Link to={link_path}>
          <button className="join-button">{button_text}</button>
        </Link>
      </div>
    </div>
  );
}
