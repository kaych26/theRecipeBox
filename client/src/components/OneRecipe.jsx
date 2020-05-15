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
  };

  componentDidMount() {
    this.setRecipe(this.props.match.params.id);
  }

  setRecipe = async (id) => {
    const recipe = await getOneRecipe(id);
    this.setState({ recipe });
  };

  checkUserMatch() {
    const { recipe } = this.state;
   
    if (recipe && this.props.currentUser)
      if (recipe.user_id ===  this.props.currentUser.id )
        return 1;
  }

  render() {
    const { recipe } = this.state;

    return (
      <div className="onerecipe-outerframe">
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
            <h3>
              {recipe.name}
              {recipe.prep_time}
            </h3>
            <img src={recipe.image} alt={recipe.name} />
            <p>{recipe.ingredient}</p>
            <p>{recipe.direction}</p>
            <p>{recipe.story}</p>
          </>
        )}
      </div>
    );
  }
}
