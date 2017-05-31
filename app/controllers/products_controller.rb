class ProductsController < BaseApiController
  def index
    # render json: Product.all
    render json: Product.all.to_json(Product.json_structure)
  end

  def create
    Product.create()
  end

  def show
    'asd' unless id > 1 && id < 12

    @product = Product.find(params[:id])
    if stale?(last_modified: @product.updated_at)
      render json: @product.to_json(Product.json_structure)
    end
  end

  def update
  end

  def destroy
  end

  private

  def person_params
    params.require(:person).permit(:name, :description, :cost)
  end
end
