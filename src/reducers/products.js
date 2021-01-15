import {
  TOGGLE_PRODUCTS_IS_LOADING,
  SET_PRODUCTS,
  TOGGLE_OPTION_DOUGH,
  TOGGLE_OPTION_SIZE,
} from "../constants/actionTypes"

const initialState = {
  isLoading: true,
  products: [],
  allOptions: {
    dough: [0, 1],
    sizes: [26, 30, 40],
  },
}

export function products(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_PRODUCTS_IS_LOADING:
      return { ...state, isLoading: action.payload }

    case SET_PRODUCTS:
      const products = action.payload ? Object.values(action.payload) : []
      return { ...state, products: products }

    case TOGGLE_OPTION_DOUGH:
      return {
        ...state,
        products: state.products.map((e) => {
          if (e.id === action.id) {
            return {
              ...e,
              selected: { ...e.selected, dough: action.option },
            }
          } else return e
        }),
      }

    case TOGGLE_OPTION_SIZE:
      return {
        ...state,
        products: state.products.map((e) => {
          if (e.id === action.id) {
            return {
              ...e,
              selected: { ...e.selected, sizes: action.option },
            }
          } else return e
        }),
      }
    default:
      return state
  }
}
