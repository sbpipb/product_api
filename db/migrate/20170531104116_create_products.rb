class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name, limit: 30, null: false
      t.string :description
      t.decimal :price, precision: 5, scale: 2, null: false
      t.boolean :enabled, default: true
      t.timestamps null: false
    end
    add_index :products, :name, unique: true
  end
end
