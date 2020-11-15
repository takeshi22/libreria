module Types
  class MutationType < Types::BaseObject
    field :update_book, mutation: Mutations::UpdateBook
    field :create_book, mutation: Mutations::CreateBook
  end
end
