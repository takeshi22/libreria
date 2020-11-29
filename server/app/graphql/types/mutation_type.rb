module Types
  class MutationType < Types::BaseObject
    field :delete_book, mutation: Mutations::DeleteBook
    field :update_book, mutation: Mutations::UpdateBook
    field :create_book, mutation: Mutations::CreateBook
    field :create_user, mutation: Mutations::CreateUser
  end
end
