FactoryGirl.define do
  factory :product do
    # name { Faker::Name.name }
    name { Faker::Pokemon.name }
    # description { Faker::Name.name }
    description { Faker::Lorem.sentence }
    price { Faker::Number.decimal(3, 2) }
  end
end
