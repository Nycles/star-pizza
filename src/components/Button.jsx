import React from "react"
import ss from "../styles/components/Button.module.scss"
import classNames from "classnames"

function Button(props) {
  const btn = classNames(ss.btn, { [ss.active]: props.active }, { [ss.add]: props.type === "add" })
  return (
    <button className={btn} onClick={props.action}>
      {props.type === "add" ? (
        <div className={ss.icon_plus}>
          <div className={ss.vertical_line}></div>
          <div className={ss.horizontal_line}></div>
        </div>
      ) : null}

      {props.type === "add" ? "Добавить" : props.text}
    </button>
  )
}

export default Button
