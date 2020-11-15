module Mutations
  class UpdateBook < BaseMutation
    graphql_name 'UpdateBook'

    field :book, Types::BookType, null: true
    
    argument :id, ID, required: true
    argument :name, String, required: true
    argument :description, String, required: false
    argument :favorite, Float, required: false
    argument :author, String, required: false
    argument :category, String, required: false

    def resolve(**args)
      book = Book.find(args[:id])
      book.update(name: args[:name], description: args[:description], favorite: args[:favorite], author: args[:author], category: args[:category])
      { book: book }
    end
  end
end
