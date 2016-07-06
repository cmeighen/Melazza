class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.text :response
      t.integer :post_id, null: false
      t.integer :answer_type, default: 0

      t.timestamps null: false
    end

    add_index :answers, :post_id
  end
end
