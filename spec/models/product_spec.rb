require 'rails_helper'

describe Product do
  it 'has a valid factory' do
    product = FactoryGirl.build(:product)
    expect(product).to be_valid
  end

  it { is_expected.to validate_presence_of(:name) }
  it { is_expected.to validate_presence_of(:price) }

  # describe '.json_structure' do
  #
  # end
  # let(:product) { FactoryGirl.build(:product) }

  describe 'ActiveModel validations:' do
    context 'name' do
      context 'is blank' do
        it 'should be invalid' do
          expect(FactoryGirl.build(:product, name: nil)).to be_invalid
        end
      end

      context 'is nil' do
        it 'should be invalid' do
          expect(FactoryGirl.build(:product, name: nil)).to be_invalid
        end
      end

      context 'is duplicated' do
        let (:error) {
          FactoryGirl.create(:product, name: 'product_name', price: 1)
          FactoryGirl.build(:product, name: 'product_name', price: 1)
        }
        subject { -> { error } }
        # it { should raise_error ActiveRecord::RecordInvalid }
      end
    end

    context 'description' do
      context 'is just optional' do
        it { expect(FactoryGirl.build(:product, description: nil)).to be_valid }
      end
    end

    context 'price' do
      context 'is blank' do
        it { expect(FactoryGirl.build(:product, price: '')).to be_invalid }
      end
      context 'is null' do
        it { expect(FactoryGirl.build(:product, price: nil)).to be_invalid }
      end
      context 'is negative' do
        amount = -(Faker::Number.decimal(3, 2).to_f)
        it { expect(FactoryGirl.build(:product, price: amount)).to be_invalid }
      end
    end
  end
end
