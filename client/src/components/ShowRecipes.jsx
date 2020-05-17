import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ShowRecipes.css';

export default function ShowRecipes(props) {
  return (
    <div className="showrecipes-outerframe">
      <div className="showrecipes-title-frame">
        <h1 className="showrecipes-cat-name">{props.category} Recipes</h1>

        {props.currentUser && (
          <div className="showrecipe-button">
            <Link to="/recipe/create">
              <button>Create</button>
            </Link>
          </div>
        )}
      </div>

      {/* <div className="showrecipes-each-frame"> */}
      {props.recipes ?
        (
          props.recipes.map((recipe) => (
            <React.Fragment key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>
                {/* <Link to={`/recipes/${recipe.group}`}> */}
                <div className="showrecipes-frame">
                  <div className="showrecipes-imgframe">
                    <img
                      className="showrecipes-img"
                      src={recipe.image}
                      alt={recipe.name}
                    // width="380px"
                    // height="300px"
                    />
                  </div>

                  <div className="showrecipes-name-frame">
                    <h2 className="showrecipes-name">{recipe.name}</h2>
                    <h3 className="showrecipes-time">
                      Prep time: {recipe.prep_time}
                    </h3>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))
        
        ): <h2>Need recipes ...</h2> }
      </div>
    // </div>
  );
}
