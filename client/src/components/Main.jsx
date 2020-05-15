import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import {
  getAllCategories,
  getAllRecipes,
  getDinnerRecipes,
  getDessertRecipes,
  postRecipe,
  putRecipe,
  destroyRecipe,
} from '../services/api-helper';
import Hero from './Hero';
import ShowCategories from './ShowCategories';
import ShowRecipes from './ShowRecipes';
import OneRecipe from './OneRecipe';
import UpdateRecipe from './UpdateRecipe';
import CreateRecipe from './CreateRecipe';


export default class Main extends Component {
  state = {
    categories: [],
    recipes: [],
    dinner_recipes: [],
    dessert_recipes: [],
  };

  componentDidMount() {
    // this.props.confirmUser();
    this.readAllCategories();
    this.readDinnerRecipes();
    this.readDessertRecipes();
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

  readDinnerRecipes = async () => {
    const dinner_recipes = await getDinnerRecipes();
    this.setState({ dinner_recipes });
  };
  readDessertRecipes = async () => {
    const dessert_recipes = await getDessertRecipes();
    this.setState({ dessert_recipes });
  };

  handleRecipeSubmit = async (recipeData) => {
    const newRecipe = await postRecipe(recipeData);
    this.setState((prevState) => ({
      recipes: [...prevState.recipes, newRecipe],
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
        return recipe.id !== parseInt(id);
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
        <Route exact path="/">
          <Hero />
          {this.state.categories && (
            <ShowCategories categories={this.state.categories} />
          )}
        </Route>

        <Route
          path="/dinner"
          render={(routerProps) => {
            const recipe = this.state.categories.find(cat => cat.group === 'dinner')
            const recipeId = recipe && recipe.id
            return <ShowRecipes recipes={this.state.recipes.filter(recipe=>recipe.category_id === recipeId)} />
          }}
        />
        <Route
          path="/dessert"
          render={(routerProps) => {
            const recipe = this.state.categories.find(cat => cat.group === 'dessert')
            const recipeId = recipe && recipe.id
            return <ShowRecipes recipes={this.state.recipes.filter(recipe => recipe.category_id === recipeId)} />
             
          }}
        />

        <Route
          exact
          path="/recipes/:id"
          render={(props) => (
            <OneRecipe
              {...props}
              handleRecipeUpdate={this.handleRecipeUpdate}
              handleRecipeDelete={this.handleRecipeDelete}
            />
          )}
        />

        <Route
          path='/recipes/:id/edit' render={(props) => {
            const { id } = props.match.params
            return <UpdateRecipe
              {...props}
              handleRecipeUpdate={this.handleRecipeUpdate}
              recipeId={id}
            />
          }}
        />

        <Route
          path="/recipes/create"
          render={(props) => (
            <CreateRecipe
              {...props}
              handleRecipeSubmit={this.handleRecipeSubmit}
              categories={this.state.categories} 
              currentUser={this.props.currentUser}
            />
          )}
        />
        
      </main>
    );
  }
}
