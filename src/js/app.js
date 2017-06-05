import React from 'react';
import ReactDOM from 'react-dom'
import * as ProductActions from "./actions/ProductActions";
import ProductStore from "./stores/productStore";
import ProductForm from "./components/productForm/Form.react";
import ProductTable from './components/productForm/_table.react'

class Layout extends React.Component {

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
    console.log('update products handler')
  }

  componentDidMount() {
    ProductStore.on('change', this.updateProducts);
    ProductStore.on('change', this.getProducts);
    ProductActions.getProducts();
  }
  componentWillUnmount() {
    ProductStore.removeListener('change', this.getProducts);
  }

  render() {
    return (<div>
              <ProductForm />
              <ProductTable products={this.state.products}/>
            </div>
    )
  }

}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app)
