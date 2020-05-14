class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  
  # GET /recipes
  def index
    @recipes = Recipe.all
    
    render json: @recipes
  end
  
  # GET /recipes/1
  def show
    render json: @recipe
  end

  def get_dinner_recipes
    @dinner_recipes = Recipe.where(category_id: '1').all
    render json: @dinner_recipes
  end
  
  def get_dessert_recipes
    @dessert_recipes = Recipe.where(category_id: '2').all
    render json: @dessert_recipes
  end

  

  # POST /recipes/create
  def create
    @recipe = Recipe.new(recipe_params)
@recipe.user=@current_user
    if @recipe.save
      render json: @recipe, status: :created, location: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  # def add_recipe
  #   @category = Category.find(params[:category_id])
  #   @food.flavors << @flavor
  #   render json: @food, include: :flavors
  # end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      # @recipe = Recipe.find('1')
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def recipe_params
      params.require(:recipe).permit(:name, :image, :prep_time, :ingredient, :direction, :story, :group_id, :user_id, :category_id)
    end
end
