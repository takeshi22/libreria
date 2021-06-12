module Mutations
  class CreateBook < BaseMutation
    graphql_name "CreateBook"

    field :book, Types::BookType, null: true

    argument :name, String, required: true
    argument :description, String, required: false
    argument :favorite, Float, required: false
    argument :author, String, required: false
    argument :category, String, required: false

    def resolve(**args)
      book = Book.create!(name: args[:name], description: args[:description], favorite: args[:favorite], author: args[:author], category: args[:category], user: context[:current_user])
      { book: book }
    end
  end
end
