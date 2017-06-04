import dispatcher from "../dispatcher";
import axios from "axios";

export function createTodo(product) {
  dispatcher.dispatch({
    type: "CREATE_PRODUCT",
    product,
  });
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
