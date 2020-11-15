module Mutations
  class DeleteBook < BaseMutation
    graphql_name 'DeleteBook'

    field :book, Types::BookType, null: true

    argument :id, ID, required: true

    def resolve(**args)
      book = Book.find(args[:id])
      book.destroy
      {
        book: book,
        result: book.errors.blank?
      }
    end
  end
end
