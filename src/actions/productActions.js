import { FETCH_PRODUCTS } from './types';


export const fetchProducts = () => dispatch => {
  fetch('https://backendapi.turing.com/products?page=1&limit=6&description_length=120')
    .then(res => res.json())
    .then(products =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
    );
}
