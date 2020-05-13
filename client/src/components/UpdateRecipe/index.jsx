import React from 'react';
import { getOneFood } from '../serives/api-helper';

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
    this.setState({
      name: name_value,
      image: image_value,
      prep_time: prep_time_value,
      ingredient: ingredient_value,
      direction: direction_value,
      story: story_value,
      group_id: group_id_value,
      user_id: user_id_value,
      category_id: category_id_value,
    });
  };

  componentDidMount() {
    this.setFormData();
  }

  setFormData = async () => {
    const recipe = await getOneRecipe(this.props.foodId);
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          this.props.handleRecipeUpdate(this.props.RecipeId, this.state);
          this.props.history.push('/recipes');
        }}>

        <h3>Update Food</h3>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        
        <button>Submit</button>

      </form>
    );
  }
}
