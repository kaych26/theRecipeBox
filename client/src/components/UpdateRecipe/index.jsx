import React, { Component } from 'react';
import { getOneRecipe } from '../../services/api-helper';

export default class UpdateRecipe extends Component {
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

  handleChange = (e) => {
    const { value } = e.target;
    // const { name, image, prep_time, ingredient, direction, story} = e.target;
    this.setState({
      name: value,
      // image: image,
      // prep_time: prep_time,
      // ingredient: ingredient,
      // direction: direction,
      // story: story,
      // group_id: group_id_value,
      // user_id: user_id_value,
      // category_id: category_id_value,
    });
  };

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const recipe = await getOneRecipe(this.props.recipeId);
    this.setState({
      name: recipe.name,
      image: recipe.image,
      prep_time: recipe.prep_time,
      ingredient: recipe.ingredient,
      direction: recipe.direction,
      story: recipe.story,
      group_id: recipe.group_id,
      user_id: recipe.user_id,
      category_id: recipe.category_id,
    });
  };

  render() {
    return (
      <>
        <h3>Update Food</h3>
        <img src={this.state.image} />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleRecipeUpdate(this.props.RecipeId, this.state);
            this.props.history.push(`/recipes/${this.props.recipeId}`);
          }}
        >
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />

          {/* <input
            type="text"
            value={this.state.prep_time}
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.ingredient}
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.direction}
            onChange={this.handleChange}
          />
          <input
            type="text"
            value={this.state.story}
            onChange={this.handleChange}
          /> */}

          <button>Submit</button>
        </form>
      </>
    );
  }
}
