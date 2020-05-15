import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import recipe_box_img from '../assets/images/img/recipe_box_blue.png';
import '../styles/Join.css';

export default function Join(props) {
  return (
    <div className="join-outerframe">
      <h2 className="join-title">Join the Recipe Box</h2>
      <div className="join-boxmsg-frame">
        <img src={recipe_box_img} />
        <h3 className="join-message">
          “ The pandemic changed our life style & many families are faced with
          cooking challenges. Let’s start sharing our cooking ideas by joining
          the Recipe Box.”
        </h3>
      </div>
      <Link to="/login">
        <button className="join-button">Login</button>
      </Link>
    </div>
  );
}
