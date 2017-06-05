import { EventEmitter } from "events";
import * as ProductActions from "../actions/ProductActions";

import dispatcher from "../dispatcher";


class ProductStore extends EventEmitter {
  constructor() {
    super()
    // this.state = ProductReducer(DEFAULT_STATE, {})
  }

  getAll() {
    return this.products;
  }

  handleActions(action) {
    console.log(action.type, 'dispatcher')
    switch(action.type) {
      case 'CREATING_PRODUCT': {
        this.isLoading = true
        this.emit('change');
        break;
      }

      case "CREATED_PRODUCT": {
        this.success = true;
        this.product = action.product;
        this.emit('CREATED_PRODUCT')
        break;
      }

      case "RECEIVE_PRODUCTS": {
        this.products = action.products['data'];
        this.emit("change");
        break;
      }

      case 'DELETE_PRODUCT': {
        this.emit('DELETE_PRODUCT')
        break;
      }

      default:
        return true;

    }
    return true;
  }

}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore));
export default productStore;
