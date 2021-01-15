import { database, storage } from ".."
import {
  SET_PRODUCTS,
  TOGGLE_OPTION_DOUGH,
  TOGGLE_OPTION_SIZE,
  TOGGLE_PRODUCTS_IS_LOADING,
} from "../constants/actionTypes"

export const toggleIsLoading = (isLoading) => {
  return { type: TOGGLE_PRODUCTS_IS_LOADING, payload: isLoading }
}

export const setProducts = (products) => {
  return { type: SET_PRODUCTS, payload: products }
}

export const toggleOptionDough = (id, option) => {
  return { type: TOGGLE_OPTION_DOUGH, id, option }
}

export const toggleOptionSize = (id, option) => {
  return { type: TOGGLE_OPTION_SIZE, id, option }
}

export const loadProducts = () => async (dispatch) => {
  try {
    await database.ref("products/").on("value", (response) => {
      const data = response.val()
      dispatch(setProducts(data))
      dispatch(toggleIsLoading(false))
    })
  } catch (err) {
    console.log(err)
  }
}

export const addNewProduct = (payload) => async (dispatch) => {
  const { values, setSubmitting } = payload

  try {
    const image = await storage
      .ref()
      .child("pizza/" + values.img.name)
      .put(values.img, values.img.type)

    const imageUrl = await image.ref.getDownloadURL()
    const product = { ...values, img: imageUrl }

    await database.ref("products/").push(product)
    setSubmitting(false)
  } catch (err) {
    console.log(err)
    setSubmitting(false)
  }
}
