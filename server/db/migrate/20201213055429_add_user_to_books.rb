class AddUserToBooks < ActiveRecord::Migration[5.2]
  def up
    execute "DELETE FROM books;"
    add_reference :books, :user, null: false, index: true
  end

  def down
    remove_reference :books, :user, index: true
  end
end
