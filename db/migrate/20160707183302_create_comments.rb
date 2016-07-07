class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.text :comment, null: false
      t.integer :post_id, null: false
      t.integer :user_id, null: false

      t.timestamps null: false
    end

    add_index :comments, :post_id
  end
end
