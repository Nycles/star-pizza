import { SET_ACTIVE_FILTER, SET_ACTIVE_SORT } from "../constants/actionTypes"

export const setActiveFilter = (type) => {
  return { type: SET_ACTIVE_FILTER, payload: type }
}

export const setActiveSort = (type) => {
  return { type: SET_ACTIVE_SORT, payload: type }
}
