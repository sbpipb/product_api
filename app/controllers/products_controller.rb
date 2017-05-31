class ProductsController < BaseApiController
  def index
    # render json: Product.all
    render json: Product.all.to_json(Product.json_structure)
  end

  def create
    if @product.present?
      render nothing: true, status: :conflict
    else
      @product = Product.new
      @product.assign_attributes(@json['product'])
      if @product.save
        render json: @product.to_json(Product.json_structure)
      else
        render nothing: true, status: :bad_request
      end
    end
  end

  def show
    @product = Product.find(params[:id])
    if stale?(last_modified: @product.updated_at)
      render json: @product.to_json(Product.json_structure)
    end
  end

  def update
    @product.assign_attributes(@json['product'])
    if @product.save
      render json: @product
    else
      render nothing: true, status: :bad_request
    end
  end

  def destroy
    @product = Product.find(params[:id])
    if @product.present?
      @product.destroy
      return render json: { success: true }
    end
    render json: { success: false }
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price)
  end
end
