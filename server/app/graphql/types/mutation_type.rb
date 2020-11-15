module Types
  class MutationType < Types::BaseObject
    field :delete_book, mutation: Mutations::DeleteBook
    field :update_book, mutation: Mutations::UpdateBook
    field :create_book, mutation: Mutations::CreateBook
  end
end
