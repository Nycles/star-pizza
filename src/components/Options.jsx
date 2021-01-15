import React from "react"
import { useDispatch, useSelector } from "react-redux"
import ss from "../styles/components/Options.module.scss"
import classNames from "classnames"
import { toggleOptionDough, toggleOptionSize } from "../actions/products"

function Options(props) {
  const allOptions = useSelector((state) => state.products.allOptions)

  const dough = allOptions.dough.map((o, i) => (
    <Option
      key={i}
      type="dough"
      name={o}
      options={props.dough}
      selected={props.selected.dough}
      id={props.id}
      index={props.index}
    />
  ))

  const sizes = allOptions.sizes.map((o, i) => (
    <Option
      key={i}
      type="size"
      name={o}
      options={props.sizes}
      selected={props.selected.sizes}
      id={props.id}
      index={props.index}
    />
  ))

  return (
    <div className={ss.options_wrapper}>
      <div className={ss.top_line}>{dough}</div>
      <div className={ss.bottom_line}>{sizes}</div>
    </div>
  )
}

function Option(props) {
  const dispatch = useDispatch()

  const option = classNames(ss.option, { [ss.active]: props.selected === props.name })
  return (
    <button
      className={option}
      onClick={
        props.selected !== props.name
          ? props.type === "dough"
            ? () => dispatch(toggleOptionDough(props.id, props.name))
            : () => dispatch(toggleOptionSize(props.id, props.name))
          : null
      }
      disabled={props.options ? !props.options.includes(props.name) : true}
    >
      {props.type === "dough" ? (props.name === 0 ? "традиционное" : "тонкое") : `${props.name} см.`}
    </button>
  )
}

export default Options
