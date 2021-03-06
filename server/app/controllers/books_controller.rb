class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  def index
    @books = Book.all
    json_response(@books)
  end

  def show
  end

  def edit
  end

  def create
    @book = Book.create!(book_paramas)
    json_response(@book, :created)
  end

  private

  def book_paramas
    params.require(:books).permit(:name, :description, :favorite, :author, :category)
  end

  def set_book
    @book = books.find(params[:id])
  end
end
