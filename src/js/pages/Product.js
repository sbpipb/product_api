import React from 'react';
import ReactDOM from 'react-dom'
import * as ProductActions from "../actions/ProductActions";
import ProductStore from "../stores/productStore";
import ProductForm from "../components/productForm/Form.react";
import ProductTable from '../components/productForm/_table.react'

class Product extends React.Component {

  constructor(){
    super()
    this.state = { products: [] };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts() {
    this.setState({
      products: ProductStore.getAll()
    })
  }

  updateProducts = () => {
  }

  changeOnDelete = () => {
    ProductActions.getProducts();
  }

  componentDidMount() {
    ProductStore.on('change', this.getProducts);
    ProductStore.on('DELETE_PRODUCT', this.changeOnDelete);
    ProductActions.getProducts();
  }

  componentWillUnmount() {
    ProductStore.removeListener('change', this.getProducts);
    ProductStore.removeListener('DELETE_PRODUCT', this.changeOnDelete);
  }

  deleteAction = (props, _this) => {
    ProductActions.deleteProduct(props)
  }

  render() {
    return (<div>
              <ProductForm />
              <ProductTable products={this.state.products} deleteMethod={this.deleteAction.bind(this  )}/>
            </div>
    )
  }

}

export default Product
