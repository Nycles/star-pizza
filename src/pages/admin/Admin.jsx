import React from "react"
import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"

import { addNewProduct } from "../../actions/products"
import { nanoid } from "nanoid"

function Admin() {
  const { allOptions, allTypes } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  const dough = allOptions.dough.map((e, i) => <Checkbox key={i} type="dough" name={e} value={e} />)
  const sizes = allOptions.sizes.map((e, i) => <Checkbox key={i} type="sizes" value={e} />)
  const types = allTypes.map((e, i) => <Radio key={i} name={e} value={i} />)

  function submit(values, { setSubmitting }) {
    const dough = values.options.dough.sort((a, b) => a - b).map((e) => Number(e))
    const sizes = values.options.sizes.sort((a, b) => a - b).map((e) => Number(e))

    values = {
      ...values,
      id: nanoid(),
      options: {
        dough: dough,
        sizes: sizes,
      },
      selected: {
        dough: dough[0] >= 0 ? dough[0] : null,
        sizes: sizes[0] ? sizes[0] : null,
      },
      type: Number(values.type),
    }
    console.log(values)
    dispatch(addNewProduct({ values, setSubmitting }))
  }

  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          price: 0,
          type: 0,
          options: { dough: [], sizes: [] },
        }}
        onSubmit={submit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <input
              name="img"
              type="file"
              accept="image/*"
              onChange={(e) => {
                setFieldValue("img", e.currentTarget.files[0])
              }}
              required
            />
            <Field name="title" type="text" required />
            <Field name="price" type="number" required />

            <div>
              <h1>Тесто</h1>
              {dough}
            </div>

            <div>
              <h1>Размеры</h1>
              {sizes}
            </div>

            <div>
              <h1>Тип</h1>
              {types}
            </div>

            <button type="submit" disabled={isSubmitting}>
              Add Pizza
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

function Checkbox(props) {
  return (
    <label>
      {props.type === "dough" ? (props.name === 0 ? "традиционное" : "тонкое") : `${props.value} см.`}
      <Field name={`options.${props.type}`} type="checkbox" value={`${props.value}`} />
    </label>
  )
}

function Radio(props) {
  return (
    <div>
      <Field name="type" type="radio" value={`${props.value}`} required />
      <label>{props.name}</label>
    </div>
  )
}

export default Admin
