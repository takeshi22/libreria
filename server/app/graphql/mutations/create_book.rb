module Mutations
  class CreateBook < BaseMutation
    graphql_name 'CreateBook'
    # TODO: define return fields
    # field :post, Types::PostType, null: false
    field :book, Types::BookType, null: true

    # TODO: define arguments
    # argument :name, String, required: true
    argument field :name, String, required: true
    argument field :description, String, required: false
    argument field :favorite, Float, required: false
    argument field :author, String, required: false
    argument field :category, String, required: false

    # TODO: define resolve method
    # def resolve(name:)
    #   { post: ... }
    # end
    def resolve(**args)
      book = Book.create(name: args[:name], description: args[:description], favorite: args[:favorite], author: args[:author], category: args[:category])
      { book: book }
    end
  end
end
