import dispatcher from "../dispatcher";
import axios from "axios";

export function createProduct(product) {
  dispatcher.dispatch({
    type: "CREATING_PRODUCT"
  });

  axios.post("http://127.0.0.1:5000/api/v1/products", product)
       .then((data) => {
         dispatcher.dispatch({type: "CREATED_PRODUCT", product: data})
        //  console.log(data)
        })
      .catch((error) => {
        console.log(error)
      })

}

export function deleteProduct(id) {
  dispatcher.dispatch({
    type: "DELETE_PRODUCT",
    id,
  });
}

export function getProducts() {
  dispatcher.dispatch({type: "FETCH_PRODUCTS"});
  axios("http://127.0.0.1:5000/api/v1/products").then((data) => {
    dispatcher.dispatch({type: "RECEIVE_PRODUCTS", products: data})
  })

}
