class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
  #  byebug
    @user = User.find_by_username(login_params[:username])

    if @user.authenticate(login_params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(user_id: @user.id, username: @user.username)
      render json: { user: @user.return_data, token: token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end
  
  # GET /auth/verify
  def verify
    # def return_data
    #   {
    #     id: id,
    #     username: username,
    #     email: email,
    #     created_at: created_at,
    #     updated_at: updated_at
    #   }
    # end
    
    render json: @current_user.return_data, status: :ok
  end


  private

  def login_params
    # byebug
    params.require(:auth).permit(:username, :password, :email)
  # byebug
  end
end
