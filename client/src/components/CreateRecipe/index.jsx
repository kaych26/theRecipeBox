import React, { Component } from 'react';

export default class CreateRecipe extends Component {
  state = {
    name: '',
    image: '',
    prep_time: '',
    ingredient: '',
    direction: '',
    story: '',
    group_id: '2',
    user_id: '',
    category_id: '2',
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
   
    return (
      <>
        <h3>Create Recipe</h3>
        <form
          id="create_form"
          onSubmit={(e) => {
            e.preventDefault();

            // this.setState({
            //   user_id: {this.currentUser},
            // });
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
      </>
    );
  }
}

