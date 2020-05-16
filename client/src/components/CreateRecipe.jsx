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

    user_id: this.props.currentUser.id,
    category_id: '',
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
        <h3 className="createrecipe-title">Create Recipe </h3>

        <select onChange={this.handleSelect}>
          <option>Select a Category</option>
          {this.props.categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.group}
            </option>
          ))}
        </select>
        <form
          id="create_form"
          onSubmit={(e) => {
            e.preventDefault();

            this.props.handleRecipeSubmit(this.state);
            this.props.history.push('/');
          }}
        >
          <input
            id="update_image"
            type="text"
            name="image"
            value={this.state.image}
            onChange={this.handleChange}
          />
          <input
            id="update_name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            id="update_prep_time"
            type="text"
            name="prep_time"
            value={this.state.prep_time}
            onChange={this.handleChange}
          />
          <input
            id="update_ingredient"
            type="text"
            name="ingredient"
            value={this.state.ingredient}
            onChange={this.handleChange}
          />
          <input
            id="update_direction"
            type="text"
            name="direction"
            value={this.state.direction}
            onChange={this.handleChange}
          />
          <input
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
