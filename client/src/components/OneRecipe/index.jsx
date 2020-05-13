import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { getOneRecipe } from '../../services/api-helper';

// t.string "name"
//     t.string "image"
//     t.string "prep_time"
//     t.text "ingredient"
//     t.text "direction"
//     t.text "story"
//     t.string "group_id"
//     t.bigint "user_id", null: false
// t.bigint "category_id", null: false

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

  render() {
    const { recipe } = this.state;
    return (
      <div>
            <h1>I am here </h1>
        {recipe && (
          <>
            <h3>
              {recipe.name}
              {recipe.prep_time}
            </h3>
          </>
        )}
      </div>
    );
  }
}
