import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from '../Login';
import Register from '../Register';
import {
  getAllCategories,
  getAllRecipes,
  postRecipe,
  putRecipe,
  destroyRecipe,
} from '../../services/api-helper';
import ShowCategories from '../ShowCategories';
import ShowRecipes from '../ShowRecipes';
// import CreateFood from './CreateFood';
// import UpdateFood from './UpdateFood';
// import FoodItem from './FoodItem';

export default class Main extends Component {
  state = {
    categories: [],
    recipes: [],
  };

  componentDidMount() {
    this.readAllCategories();
    this.readAllRecipes();
  }

  readAllCategories = async () => {
    const categories = await getAllCategories();
    this.setState({ categories });
  };

  readAllRecipes = async () => {
    const recipes = await getAllRecipes();
    this.setState({ recipes });
  };

  handleRecipeSubmit = async (recipeData) => {
    const newRecipe = await postRecipe(recipeData);
    this.setState((prevState) => ({
      foods: [...prevState.recipes, newRecipe],
    }));
  };

  handleRecipeUpdate = async (id, recipeData) => {
    const updatedRecipe = await putRecipe(id, recipeData);
    this.setState((prevState) => ({
      recipes: prevState.recipes.map((recipe) => {
        return recipe.id === id ? updatedRecipe : recipe;
      }),
    }));
  };

  handleRecipeDelete = async (id) => {
    await destroyRecipe(id);
    this.setState((prevState) => ({
      recipes: prevState.recipes.filter((recipe) => {
        return recipe.id !== id;
      }),
    }));
  };

  render() {
    return (
      <main>
        <Route
          path="/login"
          render={(props) => (
            <Login {...props} handleLogin={this.props.handleLogin} />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register {...props} handleRegister={this.props.handleRegister} />
          )}
        />
        <Route
          path="/categories"
          render={() => <ShowCategories flavors={this.state.categories} />}
        />
        <Route
          exact
          path="/recipes"
          render={(props) => (
            <ShowRecipes
              {...props}
              handleReciptDelete={this.handleReciptDelete}
              foods={this.state.foods}
            />
          )}
        />
        {/* <Route
          path="/recipes/new"
          render={(props) => (
            <CreateFood {...props} handleFoodSubmit={this.handleFoodSubmit} />
          )}
        /> */}
        {/* <Route path='/recipes/:id/edit' render={(props) => {
          const { id } = props.match.params
          return <UpdateRecipe
            {...props}
            handleFoodUpdate={this.handleFoodUpdate}
            foodId={id}
          />
        }} />
        <Route exact path='/recipes/:id' render={(props) => {
          const { id } = props.match.params
          return <FoodItem
            foodId={id}
            flavors={this.state.flavors}
          />
        }
        } /> */}
      </main>
    );
  }
}
