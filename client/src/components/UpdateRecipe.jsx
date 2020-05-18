import React, { Component } from 'react';
import { getOneRecipe } from '../services/api-helper';
import '../styles/UpdateRecipe.css';


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
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const recipe = await getOneRecipe(this.props.recipeId);
    this.setState({
      id: recipe.id,
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
      <div className="updaterecipe-outerframe">
        <h3 className="updaterecipe-title">Update Food</h3>
        <div className="updaterecipe-img">

        <img src={this.state.image} width="300px" height="250px" className="updaterecipe-img"/>
        </div>
   
        <form
          className="update-form-frame"
          id="update_form"
          onSubmit={(e) => {
            e.preventDefault();
            this.props.handleRecipeUpdate(this.state.id, this.state);
            this.props.history.goBack();
           
          }}
        >
          <label className="update-form-label" htmlFor="image">
            image url:{' '}
          </label>
          <input
            className="update-input"
            id="update_image"
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <label className="update-form-label" htmlFor="name">
            recipe name:{' '}
          </label>
          <input
            className="update-input"
            id="update_name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
<label className="update-form-label" htmlFor="prep_time">
            prep time:{' '}
          </label>
          <input
            className="update-input"
            id="update_prep_time"
            type="text"
            name="prep_time"
            value={this.state.prep_time}
            onChange={this.handleChange}
          />
          <label className="update-form-label" htmlFor="ingredient">
            ingredient:{' '}
          </label>
          <textarea
            className="update-input-multi"
            id="update_ingredient"
            type="text"
            name="ingredient"
            value={this.state.ingredient}
            onChange={this.handleChange}
          />
          <label className="update-form-label" htmlFor="direction">
            direction{' '}
          </label>
          <textarea
            className="update-input-multi"
            id="update_direction"
            type="text"
            name="direction"
            value={this.state.direction}
            onChange={this.handleChange}
          />
          <label className="update-form-label" htmlFor="story">
            tell your story:{' '}
          </label>
          <textarea
            className="update-input-multi"
            id="update_story"
            type="text"
            name="story"
            value={this.state.story}
            onChange={this.handleChange}
          />
          <div className="update-savebutton-frame">
            
          <button className="update-button">SAVE</button>
</div>
        </form>
      </div>
    );
  }
}


