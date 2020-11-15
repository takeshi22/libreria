module Types
  class QueryType < Types::BaseObject

    field :book, Types::BookType, null: true do
      description 'ブック情報を1件取得する'
      argument :id, ID, required: true
    end
    def book(id:)
      Book.find(id)
    end

    field :books, [Types::BookType], null: false
    def books
      Book.all
    end
  end
end
