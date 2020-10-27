module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # field :book, Types::BookType, null: true do
    #   description 'ブック情報を1件取得する'
    #   argument :id, ID, required: true
    # end
    # def book(id:)
    #   Book.find(id)
    # end

    field :books, [Types::BookType], null: false
    def books
      Book.all
    end

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!!!!"
    end
  end
end
