class Product < ActiveRecord::Base
  validates_presence_of :name, :price
  validates :price, numericality: { greater_than: 0 }
  validates :name, uniqueness: true

  scope :active, -> { where(enabled: true) }

  def self.json_structure
    { only: [:id, :name, :description, :price, :enabled] }
  end
end
