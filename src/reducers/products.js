import { SET_PRODUCTS, TOGGLE_OPTION_DOUGH, TOGGLE_OPTION_SIZE } from "../constants/actionTypes"

const initialState = {
  products: [],
  activeType: 0,
  allOptions: {
    dough: [0, 1],
    sizes: [26, 30, 40],
  },
  allTypes: ["все", "мясная", "вегетарианская", "гриль", "острая", "закрытая"],
}

export function products(state = initialState, action = {}) {
  switch (action.type) {
    case SET_PRODUCTS:
      const products = action.payload ? Object.values(action.payload) : []
      return { ...state, products: products }

    case TOGGLE_OPTION_DOUGH:
      return {
        ...state,
        products: state.products.map((e, i) => {
          if (i === action.index) {
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
        products: state.products.map((e, i) => {
          if (i === action.index) {
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
