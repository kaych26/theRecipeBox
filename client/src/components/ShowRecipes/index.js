import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowRecipes(props) {
  // debugger
  return (
    <div>
      <h3>Recipes</h3>
      <Link to="/recipes/create">
        <button>Create</button>
      </Link>

      <br />

      {props.recipes.map((recipe) => (
        <React.Fragment key={recipe.id}>
          <Link to={`/recipes/${recipe.id}`}>
            {recipe.name}
            <img className="recipe-img" src={recipe.image} />
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
