import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class ProductStore extends EventEmitter {
  constructor() {
    super()
  }

  // createProduct(product) {
  //   const id = Date.now();
  //   this.products.push({
  //     id,
  //     product,
  //     cost,
  //   });
  //   this.emit("change");
  // }

  getAll() {
    return this.products;
  }

  handleActions(action) {
    switch(action.type) {
      // case "CREATE_PRODUCT": {
      //   this.createProduct(action.text);
      //   break;
      // }

      case 'CREATING_PRODUCT': {
        this.loading = true
        this.emit('change');
      }

      case "CREATED_PRODUCT": {
        console.log('created')
        // ProductActions.getProducts()
        // this.emit('change')
        break;
      }

      case "RECEIVE_PRODUCTS": {
        this.products = action.products['data'];
        this.emit("change");
        break;
      }

      case 'GET_PRODUCTS': {
        // this.loading
        // busTrips.isLoading = true
        // searchTrip: function (params, callback) {
        //   Request.get('/api/v2/travel/buses/trip/search', params, callback)
        // },

        // BusTrip.searchTrip(data, (error, response) => {
        //   busTrips.isLoading = false
        //   busTrips.hasError = !!error
        //   busTrips._availableTrips = []
        //
        //   if(!busTrips.hasError && response.body.data !== null ) {
        //     busTrips.availableTrips = response.body['data']
        //     busTrips.hasError = !!!response.body['success']
        //   }
        //
        //   this.emit('change');
        // })


      }
    }
  }

}

const productStore = new ProductStore;
dispatcher.register(productStore.handleActions.bind(productStore));
export default productStore;
