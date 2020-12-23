import { SWITCH_ACTIVE_FILTER } from "../constants/actionTypes"

const initialState = {
  activeFilter: 0,
}

export const sort = (state = initialState, action = {}) => {
  switch (action.type) {
    case SWITCH_ACTIVE_FILTER:
      return {
        ...state,
        activeFilter: action.payload,
      }
    default:
      return state
  }
}
