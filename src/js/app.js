import React from 'react';
import ReactDOM from 'react-dom'
import * as ProductActions from "./actions/ProductActions";
import ProductStore from "./stores/productStore";
import ProductForm from "./components/productForm/Form.react";
import ProductTable from './components/productForm/_table.react'


class Layout extends React.Component {

  constructor(){
    super()
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      products: [],
    };
  }

  getProducts() {
    let products = ProductStore.getAll()
    this.setState({
      products: products
    })
  }

  componentWillMount() {
    ProductStore.on('change', this.getProducts);
    ProductActions.getProducts();
  }

  componentWillUnmount() {
    ProductStore.removeListener("change", this.getProducts);
  }

  productListing = (products) => {
    let elements = products.map((product) => {
      let { name, id, price, description} = product
       return ( <tr key={id}><td>{name}</td>
                             <td>${price}</td>
                             <td>{description}</td>
                </tr>
              )
     })
    return (elements)
  }

  defaultTemplate = (props) => {
    const productListing = this.productListing(this.state.products)
    // console.log({ProductForm})
    return (
      <div>
      <ProductForm />        

      </div>
    )
  }

  render() {
    return (<div>
            {this.defaultTemplate()}
            <ProductTable products={this.state.products}/>
            </div>
    )
  }

}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app)
