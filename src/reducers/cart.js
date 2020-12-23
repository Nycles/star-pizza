import {
  ADD_PRODUCT_IN_CART,
  DECREMENT_TOTAL_COUNT,
  INCREMENT_TOTAL_COUNT,
  REMOVE_ALL_PRODUCTS_IN_CART,
  REMOVE_PRODUCT_IN_CART,
} from "../constants/actionTypes"

const initialState = {
  products: [],
  totalCount: 0,
  totalPrice: 0,
}

const calculateTotalCount = (products) => {
  let result = products.reduce((acc, product) => {
    return acc + product.totalCount
  }, 0)
  return result
}

const calculateTotalPrice = (products) => {
  let result = products.reduce((acc, product) => {
    return acc + product.totalPrice
  }, 0)
  return result
}

const check = (products, product) => {
  if (products.length >= 1) {
    for (let i = 0; i !== products.length; i++) {
      if (products[i].id === product.id) {
        if (
          products[i].selected.dough === product.selected.dough &&
          products[i].selected.sizes === product.selected.sizes
        ) {
          return i
        }
      }
    }
  } else return -1
}

export const cart = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_PRODUCT_IN_CART:
      const result = check(state.products, action.product)
      const changedProducts = state.products.map((e, i) => {
        if (i === result) {
          return { ...e, totalCount: e.totalCount + 1, totalPrice: e.totalPrice + e.price }
        } else return e
      })

      if (result >= 0) {
        return {
          ...state,
          products: changedProducts,

          totalCount: calculateTotalCount(changedProducts),
          totalPrice: calculateTotalPrice(changedProducts),
        }
      } else {
        const product = { ...action.product, totalCount: 1, totalPrice: action.product.price }
        const withNewProduct = [...state.products, product]
        return {
          ...state,
          products: withNewProduct,

          totalCount: calculateTotalCount(withNewProduct),
          totalPrice: calculateTotalPrice(withNewProduct),
        }
      }

    case REMOVE_PRODUCT_IN_CART:
      const withRemovedProduct = state.products.filter((e, i) => i !== action.id)

      return {
        ...state,
        products: withRemovedProduct,

        totalCount: calculateTotalCount(withRemovedProduct),
        totalPrice: calculateTotalPrice(withRemovedProduct),
      }

    case REMOVE_ALL_PRODUCTS_IN_CART:
      return {
        ...state,
        products: [],
        totalCount: 0,
        totalPrice: 0,
      }

    case INCREMENT_TOTAL_COUNT:
      const productsInc = state.products.map((p, i) =>
        i === action.index ? { ...p, totalCount: p.totalCount + 1, totalPrice: p.totalPrice + p.price } : p
      )

      return {
        ...state,
        products: productsInc,
        totalCount: calculateTotalCount(productsInc),
        totalPrice: calculateTotalPrice(productsInc),
      }

    case DECREMENT_TOTAL_COUNT:
      const productsDec = state.products.map((p, i) =>
        i === action.index
          ? p.totalCount > 1
            ? { ...p, totalCount: p.totalCount - 1, totalPrice: p.totalPrice - p.price }
            : p
          : p
      )

      return {
        ...state,
        products: productsDec,
        totalCount: calculateTotalCount(productsDec),
        totalPrice: calculateTotalPrice(productsDec),
      }
    default:
      return state
  }
}
