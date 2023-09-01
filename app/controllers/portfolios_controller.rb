class PortfoliosController < ApplicationController
  def index
    @portfolios = Portfolio.all
    render json: @portfolios
  end

  def show
    @portfolio = Portfolio.find(params[:id])
  end
end
