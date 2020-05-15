import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { getOneRecipe } from '../services/api-helper';
import '../styles/Global.css';
import '../styles/OneRecipe.css';

export default class OneRecipe extends Component {
  state = {
    name: '',
    image: '',
    prep_time: '',
    ingredient: '',
    direction: '',
    story: '',
    group_id: '',
    user_id: '',
    category_id: '',
    current_user_id: '',
  };

  componentDidMount() {
    this.setRecipe(this.props.match.params.id);
    this.checkUserMatch();
  }

  setRecipe = async (id) => {
    const recipe = await getOneRecipe(id);
    this.setState({ recipe });
  };

  checkUserMatch() {
    // const { recipe } = this.state;
    const recipeId = this.state.user_id;

    // if (recipe && this.props.currentUser)
    // if (recipeId ===  this.props.currentUser.id )
    return 1;
  }

  render() {
    const { recipe } = this.state;
    // const userId = this.props.currentUser.id
    // const userId = this.props.currentUser.id

    return (
      <div className="onerecipe-outerframe">
        {/* {recipe && <h1> Recipe creator: {recipe.user_id}</h1>} */}
        {/* {this.props.currentUser && <h1> User: {this.props.currentUser.id}</h1>} */}

        {/* {recipe && this.props.currentUser  } */}

        {this.checkUserMatch() && (
          <>
            <button
              onClick={() => {
                // this.props.handleRecipeUpdate(`${recipe.id}`);
                this.props.history.push(`/recipes/${recipe.id}/edit`);
              }}
            >
              Edit
            </button>

            <button
              onClick={() => {
                this.props.handleRecipeDelete(`${recipe.id}`);
                this.props.history.push('/');
              }}
            >
              Delete
            </button>
          </>
        )}

        {recipe && (
          <>
            <div className="onerecipe-name-frame">
              <h2 className="onerecipe-name">{recipe.name}</h2>
              <h3 className="">Shared by user: {recipe.user_id}</h3>
              <h3>Prep time: {recipe.prep_time}</h3>
            </div>

            <img src={recipe.image} alt={recipe.name} />
            <div className="onerecipe-ingredient">
              <h2 className="onerecipe-title">INGREDIENTS</h2>
              <p>{recipe.ingredient}</p>
            </div>

            <div className="onerecipe-direction">
              <h2 className="onerecipe-title">DIRECTIONS</h2>
              <p>{recipe.direction}</p>
            </div>

            <div className="onerecipe-story">
              <h2 className="onerecipe-title"> STORY</h2>
              <p>{recipe.story}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}
