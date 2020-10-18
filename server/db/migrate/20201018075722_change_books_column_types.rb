class ChangeBooksColumnTypes < ActiveRecord::Migration[5.2]
  def change
    change_column_null :books, :name, false
  end
end
