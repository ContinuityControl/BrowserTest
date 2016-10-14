class UserDataController < ApplicationController
  before_action :set_user_datum, only: [:show, :edit, :update, :destroy]

  # POST /user_data
  def create
    @user_datum = UserDatum.new(user_datum_params)

    if @user_datum.save
      Mailer.send_data(@user_datum).deliver
      flash[:notice] = 'Thank You for submitting your data.'
      redirect_to root_path
    else
      flash[:error] = 'Invalid Email Address'
      redirect_to root_path
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_datum
      @user_datum = UserDatum.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_datum_params
      params.require(:user_datum).permit(:email_address, :honeypot, :ip_address, :data)
    end
end
