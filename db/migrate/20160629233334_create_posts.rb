class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :author_id, null: false
      t.integer :post_type, default: 0
      t.integer :post_visibility, default: 0

      t.timestamps null: false
    end
  end
end
