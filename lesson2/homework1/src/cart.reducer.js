import { ADD_PRODUCT, REMOVE_PRODUCT } from "./cart.actions";

const initialState = {
 products: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload.cart),
      };

    case REMOVE_PRODUCT: {
      const newCart = state.products.filter(
        (item) => item.id !== action.payload.productId
      );
      return {
        ...state,
        products: newCart,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
