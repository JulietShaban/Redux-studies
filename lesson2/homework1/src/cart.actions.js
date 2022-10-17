export const ADD_PRODUCT = "PRODUCTS/ADD_PRODUCT";
export const REMOVE_PRODUCT = "PRODUCTS/REMOVE_PRODUCT";

export const addProduct = (productId, productName) => {
  return {
    type: ADD_PRODUCT,
    payload: {
      productId,
      productName,
    },
  };
};

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: {
      cart: {
        productId,
      },
    },
  };
};
