import React, { Component } from 'react';
import '../styles/CreateRecipe.css';

export default class CreateRecipe extends Component {
  state = {
    name: '',
    image: '',
    prep_time: '',
    ingredient: '',
    direction: '',
    story: '',
    user_id: '',
    category_id: '',
  };

  assignUserId = () => {
    this.setState({
      user_id: this.props.currentUser.id,
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSelect = (e) => {
    this.setState({
      category_id: e.target.value,
    });
  };
  render() {
    return (
      <div className="createrecipe-outerframe">
        {this.props.currentUser && this.assignUserId}
        <h3 className="createrecipe-title">Create Recipe </h3>
        <div className="create-select-frame">
          <select onChange={this.handleSelect} className="create-select">
            <option>Select a Category</option>
            {this.props.categories.map((category) => (
              <option key={category.id} value={category.id} >
                {category.group}
              </option>
            ))}
          </select>
        </div>
        <form
          className="create-form-frame"
          id="create_form"
          onSubmit={(e) => {
            e.preventDefault();

            this.props.handleRecipeSubmit(this.state);
            this.props.history.push('/');
          }}
        >
          <label className="create-form-label" htmlFor="image">
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
          <label className="create-form-label" htmlFor="name">
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
          <label className="create-form-label" htmlFor="prep_time">
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
          <label className="create-form-label" htmlFor="ingredient">
            ingredient:{' '}
          </label>
          <input
            className="update-input"
            id="update_ingredient"
            type="text"
            name="ingredient"
            value={this.state.ingredient}
            onChange={this.handleChange}
          />
          <label className="create-form-label" htmlFor="direction">
            direction{' '}
          </label>
          <input
            className="update-input"
            id="update_direction"
            type="text"
            name="direction"
            value={this.state.direction}
            onChange={this.handleChange}
          />
          <label className="create-form-label" htmlFor="story">
            tell your story:{' '}
          </label>
          <input
            className="update-input"
            id="update_story"
            type="text"
            name="story"
            value={this.state.story}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>{' '}
      </div>
    );
  }
}
