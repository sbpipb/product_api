class Product < ActiveRecord::Base
  scope :active, -> { where(enabled: true) }

  def self.json_structure
    { only: [:id, :name, :description, :price, :enabled] }
  end
end
