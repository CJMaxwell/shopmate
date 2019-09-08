import { FETCH_PRODUCTS } from '../actions/types';

const initialState = {
  productItems: [],
}

const productReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        productItems: action.payload
      }
    default:
      return state;
  }
}

export default productReducer;