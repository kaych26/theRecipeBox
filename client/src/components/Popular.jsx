import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Popular.css';


export default function Popular(props) {
  return (
    <div className="popular-outerframe">
      <h1>
        Popular Recipes
      </h1>
      <div className="popularimage-frame">

         {props.recipes.map((recipe) => 
           <img src={recipe.image} alt={recipe.name} width="200px" height="200px"/>
         )}
      </div>

    </div>
  )


}