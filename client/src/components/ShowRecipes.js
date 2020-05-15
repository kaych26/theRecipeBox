import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Global.css';
import '../styles/ShowRecipes.css';

export default function ShowRecipes(props) {
  // debugger
  return (
    <div className="showrecipes-outerframe">
      <h3>Recipes</h3>
      {props.currentUser && <Link to="/recipes/create"><button>Create</button></Link>}

      <br />

      {props.recipes.map((recipe) => (
        <React.Fragment key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            <img className="recipe-img" src={recipe.image} width="200px"/>
            <div>
              {recipe.name}, Prep time: {recipe.prep_time}
            </div>
          </Link>
          {/* <button
            onClick={() => {
              props.history.push(`/recipes/${recipe.id}/edit`);
            }}
          >
            Edit
          </button> */}
          {/* <button
            onClick={() => {
              props.handleRecipeDelete(recipe.id);
            }}
          >
            Delete
          </button> */}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
}
