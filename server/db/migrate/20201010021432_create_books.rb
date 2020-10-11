class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :name
      t.text :description
      t.float :favorite
      t.string :author
      t.string :category

      t.timestamps
    end
  end
end
