import { database, storage } from ".."
import { SET_PRODUCTS, TOGGLE_OPTION_DOUGH, TOGGLE_OPTION_SIZE } from "../constants/actionTypes"

export const loadProducts = () => async (dispatch) => {
  try {
    await database.ref("products/").on("value", (response) => {
      const data = response.val()
      dispatch(setProducts(data))
    })
  } catch (err) {
    console.log(err)
  }
}

export const setProducts = (products) => {
  return { type: SET_PRODUCTS, payload: products }
}

export const toggleOptionDough = (index, option) => {
  return { type: TOGGLE_OPTION_DOUGH, index, option }
}

export const toggleOptionSize = (index, option) => {
  return { type: TOGGLE_OPTION_SIZE, index, option }
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
