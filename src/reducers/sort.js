import { SET_ACTIVE_FILTER, SET_ACTIVE_SORT } from "../constants/actionTypes"

const initialState = {
  activeFilter: 0,
  activeSort: 0,
}

export const sort = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
      }
    case SET_ACTIVE_SORT:
      return {
        ...state,
        activeSort: action.payload,
      }
    default:
      return state
  }
}
