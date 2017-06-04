import React from 'react';
import ReactDOM from 'react-dom'
import * as ProductActions from "./actions/ProductActions";
import ProductStore from "./stores/productStore";
import ProductForm from "./components/productForm";

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
    return (
      <div>

      <div>
       <Form state={this.state} onChange={changes => this.setState(changes)}>
         <Field fieldName='name' label='Name' type={Text}/>
         <Field fieldName='description' label='description' type={Text}/>
         <Field fieldName='cost' label='cost' type={Text}/>
       </Form>
      </div>



        <div className="panel panel-default">
            <table className="table table-hover ">
            <thead>
              <tr>
                <td>Name</td>
                <td>Price</td>
                <td>Description</td>
              </tr>
            </thead>
            <tbody>
              {productListing}
            </tbody>
            </table>
        </div>

      </div>
    )
  }

  render() {
    return (this.defaultTemplate())
  }

}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app)
