import React from 'react'
import ReactDOM from 'react-dom'
import ProductStore from "../../stores/productStore";
import * as ProductActions from "../../actions/ProductActions";

class ProductForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      description: ''
    }
  }

  submitAction = (event) => {
    let product = {
                    product: {
                      name: this.state.name,
                      price: this.state.price,
                      description: this.state.description,
                    }
                  }
    ProductActions.createProduct(product);
  }

  changeName = (event) => {
    this.setState({name: event.target.value});
  }

  changeDescription = (event) => {
    this.setState({description: event.target.value});
  }

  changePrice = (event) => {
    this.setState({price: event.target.value});
  }

  componentDidMount(){
    ProductStore.on('CREATED_PRODUCT', this.onChange);
  }

  componentWillUnmount(){
    ProductStore.removeListener('CREATED_PRODUCT', this.onChange)
  }

  onChange = () => {
    this.setState({ product: ProductStore.product });
    ProductActions.getProducts();
  }

  componentWillUnmount(){

  }

  render() {
    return (
      <div className='col-md-5'>
        <h1>Create Product</h1>
        <div>
          <div className='row'>
            <div className="form-group col-md-6">
              <label>Name</label>
              <input onBlur={this.changeName.bind(this)}  type="name" className="form-control" id="exampleInputEmail1" placeholder="name" />
            </div>

            <div className="form-group col-md-6">
              <label>Price</label>
              <input onBlur={this.changePrice.bind(this)}  type="name" className="form-control" id="exampleInputPrice1" placeholder="40.00" />
            </div>
          </div>

          <div className='row'>
            <div className='form-group col-md-6'>
              <button className='btn' onClick={this.submitAction.bind(this)}  className="btn btn-default">Submit</button>
            </div>
            <div className="form-group col-md-6">
              <label>Description</label>
              <input onBlur={this.changeDescription.bind(this)}  type="description" className="form-control" id="exDescription" placeholder="item is blah blaa lbah" />
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default ProductForm
