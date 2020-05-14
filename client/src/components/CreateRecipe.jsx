import React, { Component } from 'react';

export default class CreateRecipe extends Component {

  // t.string "name"
    // t.string "image"
    // t.string "prep_time"
    // t.text "ingredient"
    // t.text "direction"
    // t.text "story"
    // t.string "group_id"
    // t.bigint "user_id", null: false
    // t.bigint "category_id", null: false
    // t.datetime "created_at", precision: 6, null: false
    // t.datetime "updated_at", precision: 6, null: false
    // t.index ["category_id"], name: "index_recipes_on_category_id"
    // t.index ["user_id"], name: "index_recipes_on_user_



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
      category_id: e.target.value
    })

  }
  render() {
    //  debugger
    return (
      <>
        {/* <h1>{this.props.currentUser.username}</h1> */}
        <h3>Create Recipe </h3>

        <select onChange={this.handleSelect}>
          <option>
            Select a Category
          </option>
          {
            this.props.categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.group}
              </option>
            )
              
            )
          }
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
      </>
    );
  }
}
