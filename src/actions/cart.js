import {
  ADD_PRODUCT_IN_CART,
  DECREMENT_TOTAL_COUNT,
  INCREMENT_TOTAL_COUNT,
  REMOVE_ALL_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_IN_CART,
} from "../constants/actionTypes"

export const addProductInCart = (product) => {
  return { type: ADD_PRODUCT_IN_CART, product }
}

export const removeProductInCart = (id) => {
  return { type: REMOVE_PRODUCT_IN_CART, id }
}

export const removeAllProductsInCart = () => {
  return { type: REMOVE_ALL_PRODUCTS_IN_CART }
}

export const incrementTotalCount = (index) => {
  return { type: INCREMENT_TOTAL_COUNT, index }
}

export const decrementTotalCount = (index) => {
  return { type: DECREMENT_TOTAL_COUNT, index }
}
