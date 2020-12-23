import { SWITCH_ACTIVE_FILTER } from "../constants/actionTypes"

export const switchActiveFilter = (type) => {
  return { type: SWITCH_ACTIVE_FILTER, payload: type }
}
