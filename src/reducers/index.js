import { combineReducers } from "redux"
import { products } from "./products"
import { cart } from "./cart"
import { sort } from "./sort"

export const rootReducer = combineReducers({ products, cart, sort })
